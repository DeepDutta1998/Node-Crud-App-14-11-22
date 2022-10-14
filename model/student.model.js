const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },
    businessArea: {
      type: String,
      default: "",
    },
    employees: {
      type: String,
      default: "",
    },
    street: {
      type: String,
      default: "",
    },
    adinfo: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    place: {
      type: String,
      default: "",
    },
    country: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = new mongoose.model("students", studentSchema);
