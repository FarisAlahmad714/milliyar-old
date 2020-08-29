import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  console.log(req.query.isUpcoming);
  const isUpcoming =
    req.query.isUpcoming === 'true'
      ? { isUpcoming: true }
      : req.query.isUpcoming === 'false'
      ? { isUpcoming: false }
      : {};
  console.log(isUpcoming);
  const collectionName = req.query.collection
    ? { collectionName: req.query.collection }
    : {};
  console.log(collectionName);
  const products = await Product.find({
    ...category,
    ...collectionName,
    ...isUpcoming,
  });
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.image = req.body.image;
    product.images = req.body.images;
    product.isUpcoming = req.body.isUpcoming;
    product.category = req.body.category;
    product.collectionName = req.body.collectionName;
    product.price = req.body.price;
    product.countInStock = req.body.countInStock;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});
// he mentioned the client can post products?ask
router.post('/', isAuth, isAdmin, async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    collectionName: req.body.collectionName,
    price: req.body.price,
    countInStock: req.body.countInStock,
  });

  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});
export default router;
