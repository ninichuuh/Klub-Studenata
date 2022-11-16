const Section = require("../models/Section");
const User = require("../models/User");

const getAllSections = async (req, res) => {
  const sections = await Section.find().lean();

  if (!sections?.length) {
    return res.status(400).json({ message: "No sections found" });
  }

  res.json(sections);
};

const createNewSection = async (req, res) => {
  const { title, text, active, manager } = req.body;

  if (!title || !text || !manager) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const duplicate = await Section.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();
  if (duplicate) {
    return res.status(409).json({ message: "Duplicate section title" });
  }

  const section = await Section.createe({ title, text, manager });

  if (section) {
    return res.status(201).json({ message: "New section created" });
  } else {
    return res
      .status(400)
      .json({ message: "Invalid section data recived --create" });
  }
};

const updateSection = async (req, res) => {
  const { id, manager, title, text, active } = req.body;

  if (!id || !manager || !title || !text || typeof active !== "boolean") {
    return res.status(400).json({ message: "All fields are required" });
  }

  const section = await Section.findById(id).exec();

  if (!event) {
    return res.status(400).json({ message: "Section not fount--update" });
  }

  const duplicate = await Section.findOne({ title })
    .collation({ locale: "en", strength: 2 })
    .lean()
    .exec();

  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: "Duplicate section name" });
  }

  section.manager = manager;
  section.title = title;
  section.text = text;
  section.active = active;

  const updatedSection = await section.save();

  res.json(`'${updatedSection.title}' updated`);
};

const deleteSection = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Section Id required" });
  }

  const section = await Section.findById(id).exec();

  if (!section) {
    return res.status(400).json({ message: "Section not found --delete" });
  }
  const result = await section.deleteOne();

  const reply = `Section '${result.title}' with ID ${result._id} deleted`;

  res.json(reply);
};

module.exports = {
  getAllSections,
  createNewSection,
  updateSection,
  deleteSection
};
