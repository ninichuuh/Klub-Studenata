const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const eventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    mainevent: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

eventSchema.plugin(AutoIncrement, {
  inc_field: "event",
  id: "eventNums",
  start_seq: 100
});

module.exports = mongoose.model("Event", eventSchema);
