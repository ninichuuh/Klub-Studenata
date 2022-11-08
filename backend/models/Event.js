const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

eventSchema.plugin(AutoIncrement, {
  inc_field: "event",
  id: "eventNums",
  start_seq: 103,
});

module.exports = mongoose.model("Event", eventSchema);
