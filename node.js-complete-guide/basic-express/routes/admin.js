const path = require("path");
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();
const products = [];
// admin/add-product => get
router.get("/add-product", productsController.getAddProducts);

// admin/add-product => post
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
