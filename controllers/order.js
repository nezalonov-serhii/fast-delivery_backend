const { ctrlWrapper, HttpError } = require("../helpers");
const { Order } = require("../models");

const getAllOrder = async (req, res) => {
   const result = await Order.find();

   res.status(200).json(result);
};

const addOrder = async (req, res) => {
   const result = await Order.create(req.body);
   res.status(201).json(result);
};

module.exports = {
   getAllOrder: ctrlWrapper(getAllOrder),
   addOrder: ctrlWrapper(addOrder),
};
