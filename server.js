const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/error/customErrorHandler");
const path = require("path");

const app = express();

//Express - body middleware
app.use(express.json());

//Environment Variables
dotenv.config({
    path: "./config/env/config.env"
})

//MongoDB Connection

connectDatabase();

const PORT = process.env.PORT;

app.use("/api",routers);
// Error Handler
app.use(customErrorHandler);

//static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT,() => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});