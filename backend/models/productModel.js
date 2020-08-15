import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  collectionName: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  countInStock: { type: Number, default: 0, required: true },
  //   description: { type: String, required: true },
});

const productModel = mongoose.model("Product", productSchema);

export default productModel;

//\node_modules\mongoose\lib\schema.js:644
//    throw new Error('`' + firstPieceOfPath + '` may not be used as a schema pathname');
//    ^
//Error: `collectionName` may not be used as a schema pathname
//\node_modules\mongoose\lib\schema.js:644:11)
