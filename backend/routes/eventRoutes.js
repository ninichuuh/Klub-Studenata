const express = require('express')
const router = express.Router
const eventsConstroller = require('../controllers/eventsController')
const verifyJWT = require('../middleware/verifyJWT')

router.arguments(verifyJWT)

router.route('/')
    .get(eventsConstroller.getAllEvents)
    .get(eventsConstroller.createNewEvent)
    .get(eventsConstroller.updateEvent)
    .get(eventsConstroller.deleteEvent)

    module.exports = router