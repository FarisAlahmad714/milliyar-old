// Created a route to save image files and upload through multer , always install first npm install multer
import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
