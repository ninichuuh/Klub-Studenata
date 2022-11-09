const Event = require("../models/Event");
const User = require("../models/User");

// @access Private
const getAllEvents = async (req, res) => {
  // Get all events from MongoDB
  const events = await Event.find().lean();
  // If no events
  if (!events?.length) {
    return res.status(400).json({ message: "No events found ovjde ga jebe" });
  }

  // Add username to each Event before sending the response
  // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE
  // You could also do this with a for...of loop
  const eventsWithUser = await Promise.all(
    events.map(async (event) => {
      const user = await User.findById(event.user).lean().exec();
      return { ...event, username: user.username };
    })
  );

  res.json(eventsWithUser);
};

// @desc Create new event

// @access Private
const createNewEvent = async (req, res) => {
  const { user, title, text } = req.body;

  // Confirm data
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required ovo nije" });
  }

  // Check for duplicate title
  const duplicate = await Event.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate) {
    return res.status(409).json({ message: "Duplicate event title" });
  }

  // Create and store the new user
  const event = await Event.create({ user, title, text });

  if (event) {
    // Created
    return res.status(201).json({ message: "New event created" });
  } else {
    return res.status(400).json({ message: "Invalid event data received create" });
  }
};

// @desc Update a event

// @access Private
const updateEvent = async (req, res) => {
  const { id, user, title, text, completed } = req.body;

  // Confirm data
  if (!id || !user || !title || !text || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Confirm event exists to update
  const event = await Event.findById(id).exec();

  if (!event) {
    return res.status(400).json({ message: "Event not found update" });
  }

  // Check for duplicate title
  const duplicate = await Event.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  // Allow renaming of the original event
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate event title" });
  }

  event.user = user;
  event.title = title;
  event.text = text;
  event.completed = completed;

  const updatedEvent = await event.save();

  res.json(`'${updatedEvent.title}' updated`);
};

// @desc Delete a event
// @access Private
const deleteEvent = async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Event ID required" });
  }

  // Confirm event exists to delete
  const event = await Event.findById(id).exec();

  if (!event) {
    return res.status(400).json({ message: "Event not found delete" });
  }

  const result = await event.deleteOne();

  const reply = `Event '${result.title}' with ID ${result._id} deleted`;

  res.json(reply);
};

module.exports = {
  getAllEvents,
  createNewEvent,
  updateEvent,
  deleteEvent
};
