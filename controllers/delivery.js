const { ctrlWrapper, HttpError } = require("../helpers");
const { Delivery } = require("../models");

const getAllByCategory = async (req, res) => {
   const { category } = req.params;

   const result = await Delivery.find({ market: category });

   res.status(200).json(result);
};

module.exports = {
   getAllByCategory: ctrlWrapper(getAllByCategory),
};
