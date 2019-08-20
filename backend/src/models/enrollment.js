const { Schema, model } = require("mongoose");

const enrollmentSchema = new Schema(
  {
    books: {
      type: String,
      required: true
    },
    teacher: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("enrollment", enrollmentSchema);
