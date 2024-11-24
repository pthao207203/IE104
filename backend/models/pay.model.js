const mongoose = require("mongoose");

const paySchema = new mongoose.Schema(
  {
    UserId: String,
    CourseId: String,
    PayTotal: String,
    PayStatus: {
      type: Number,
      default: 0,
    },
    PayVoucher: String,
    createdBy: {
      UserId: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    editedBy: [
      {
        UserId: String,
        editedAt: Date,
      },
    ],
  }
);

const Pay = mongoose.model("Pay", paySchema, "Pay");

module.exports = Pay;