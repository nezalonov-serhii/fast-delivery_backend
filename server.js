const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
   .connect(DB_HOST)
   .then(() => {
      console.log("Database connection successful");
      app.listen("3131");
   })
   .catch((error) => {
      console.log(error.message);
      process.exit(1);
   });
