const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
   {
      userFullName: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
      },
      phone: {
         type: Number,
         required: true,
      },
      address: {
         type: String,
         required: true,
      },

      totalCost: {
         type: Number,
         required: true,
      },
      totalDiscount: {
         type: Number,
         required: true,
      },
      products: [
         {
            nameProduct: {
               type: String,
               required: true,
            },
            imageUrl: {
               type: String,
               required: true,
            },
            price: {
               type: Number,
               required: true,
            },
            count: {
               type: Number,
               required: true,
            },
            discount: Number,
         },
      ],
   },
   { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
