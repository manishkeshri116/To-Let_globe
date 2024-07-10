const Contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  const { name, email, topic, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    topic,
    message,
  });

  try {
    await newContact.save();
    res.status(201).send('Contact form submitted successfully');
  } catch (error) {
    res.status(500).send('Error submitting contact form');
  }
};
