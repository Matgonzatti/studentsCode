const express = require("express");
const StudentController = require("./controllers/studentController");

const routes = express.Router();

routes.get("/student", StudentController.index);
routes.post("/student", StudentController.store);

module.exports = routes;
