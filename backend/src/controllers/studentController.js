const Student = require("../models/student");

module.exports = {
  async store(req, res) {
    const { nameStudent } = req.body;
    const studentExists = await Student.findOne({
      name: nameStudent
    });

    if (studentExists) {
      return res.json(studentExists);
    }

    const student = await Student.create(req.body);

    return res.json(student);
  },

  async index(req, res) {
    const student = await Student.find();

    return res.json(student);
  }
};
