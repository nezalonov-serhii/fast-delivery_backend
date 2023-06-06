const express = require("express");

const { deliveryCtrl } = require("../controllers");

const deliveryRouter = express.Router();

deliveryRouter.get("/:category", deliveryCtrl.getAllByCategory);

module.exports = deliveryRouter;
