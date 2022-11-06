const User = require("../models/User");
const Event = require("../models/Event");
const asyncHandler = require("express-async-handler");

// @desc Get all notes
// @route GET /notes
// @access Private
const getAllEvents = asyncHandler(async (req, res) => {
    // Get all notes from MongoDB
  const events = await Event.find().lean();
  if (!events?.lenght) {
    return res.status(400).json({ message: "No events found" });
  }

  const eventsWithUser = await Promise.all(
    events.map(async (event) => {
      const user = await User.findById(event.user).lean().exec();
      return { ...event, username: user.username };
    })
  );

  res.json(eventsWithUser);
});

const createNewEvent = asyncHandler(async (req, res) => {
  const { title, text, date } = req.body;
  if (!event || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const duplicate = await Event.findOne({ title }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate event" });
  }
  const event = await Event.create({ event, title, text, date });

  if (event) {
    //created
    return res.status(201).json({ message: "New event created" });
  } else res.status(400).json({ message: "Invalid event data  received" });
});

const updateEvent = asyncHandler(async (req, res) => {
  const { id, user, title, text, date } = req.body;

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
  const duplicate = await Event.findOne({ title }).lean().exec();

  // Allow renaming of the original note
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate event title" });
  }

  event.user = user;
  event.title = title;
  event.text = text;
  event.date = date;

  const updatedEvent = await event.save();

  res.json(`'${updatedEvent.title}' updated`);
});

const deleteEvent = asyncHandler(async (req, res) => {
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

  res.json(reply);
});

module.exports = {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent,
};
