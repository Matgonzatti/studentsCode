const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();
const server = require("http").Server(app);

mongoose.connect("mongodb://localhost:27017/school", { useNewUrlParser: true });
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
