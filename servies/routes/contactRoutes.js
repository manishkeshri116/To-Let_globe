const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { handleContactForm, getSubmissions } = require('../controllers/contactControler');

router.post('/submit', contactController.submitContactForm);
router.post('/contact', handleContactForm);
router.get('/submissions', getSubmissions);
module.exports = router;
