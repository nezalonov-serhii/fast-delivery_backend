const express = require("express");
const { orderCtrl } = require("../controllers");

const orderRouter = express.Router();

orderRouter.get("/", orderCtrl.getAllOrder);
orderRouter.post("/", orderCtrl.addOrder);

module.exports = orderRouter;
