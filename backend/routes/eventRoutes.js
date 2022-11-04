const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");
const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .get(eventsController.getAllEvents)
  .get(eventsController.createNewEvent)
  .get(eventsController.updateEvent)
  .get(eventsController.deleteEvent);

module.exports = router;
