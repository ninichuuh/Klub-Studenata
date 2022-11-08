const User = require("../models/User");
const Event = require("../models/Event");

// @access Private
const getAllEvents = async (req, res) => {
  // Get all events from MongoDB
  const events = await Event.find().lean();
  console.table(events);
  if (!events?.lenght) {
    return res.status(400).json({ message: "No events found controller" });
  }
  res.json(events);
};

const createNewEvent = async (req, res) => {
  const { title, text, date } = req.body;
  if (!date || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await Event.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate event" });
  }
  const event = await Event.create({ title, text, date });

  if (event) {
    //created
    return res.status(201).json({ message: "New event created" });
  } else res.status(400).json({ message: "Invalid event data  received" });
};

const updateEvent = async (req, res) => {
  const { id, title, text, date } = req.body;
  // Confirm data
  if (!id || !user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm note exists to update
  const event = await Event.findById(id).exec();

  if (!event) {
    return res.status(400).json({ message: "Event not found" });
  }
  // Check for duplicate title
  const duplicate = await Event.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow renaming of the original note
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate event title" });
  }

  event.title = title;
  event.text = text;
  event.date = date;

  const updatedEvent = await event.save();

  res.json(`'${updatedEvent.title}' updated`);
};

const deleteEvent = async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Event ID required" });
  }

  // Confirm note exists to delete
  const event = await Event.findById(id).exec();

  if (!event) {
    return res.status(400).json({ message: "Event not found" });
  }

  const result = await Event.deleteOne();

  const reply = `Event '${result.title}' with ID ${result._id} deleted`;

  res.json(raeply);
};

module.exports = {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent
};
