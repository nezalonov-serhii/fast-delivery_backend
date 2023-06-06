A backend created for the Fast Delivery app in which you can order burgers, french fries and delicious ice cream.
The server part was built on the following technologies: Node.js, Express, Mongoose. Database - MongoDB.

========================= To run the backend you need: =========================

Go to the MongoDB site and create a classter there.After creating a user. The default login is admin, and specify the password yourself. Back up your IP address by clicking on the button below. Click the Browse Collections button and click Create Database. The database name is "fast-delivery" and the two collections in that database called "deliveries" are products, "orders" for order history. Then go to your project folder and copy the contents into the "products.json" file. Go to our "products" collection and click on the "Insert document" button and paste all the products there. Then click the "Connect" button and then click "Connect App". Copy the link. Create a file ".env" in the root of the project and insert a link to connect to the database under the key "DB_HOST=" it will look like this "DB_HOST=mongodb+srv://User:<password>@cluster0.1spufqi.mongodb.net/?retryWrites=true&w=majority" Change your username and password to the ones you did during registration, and add the name of our database "fast-delivery".The link should look like this: "DB_HOST=mongodb+srv://User:QWE123QWE123QWE1@cluster0.1spufqi.mongodb.net/fast-delivery?retryWrites=true&w=majority".

Open a terminal in the root folder of the server. You can also go there using the "cd server" command. Enter the command "npm i". After downloading the data, enter the command "npm start". The console should show "Server ok" and "Database connection successful"

You can see the project's work here - https://fast-delivery-tau.vercel.app/

Frontend by link https://github.com/nezalonov-serhii/fast-delivery_frontend
