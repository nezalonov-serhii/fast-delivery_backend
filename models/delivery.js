const { Schema, model } = require("mongoose");

const deliverySchema = new Schema(
   {
      category: {
         type: String,
         required: true,
      },
      imageUrl: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      market: {
         type: String,
         required: true,
      },
      discount: Number,
   },
   { versionKey: false, timestamps: true }
);

const Delivery = model("delivery", deliverySchema);

module.exports = Delivery;
