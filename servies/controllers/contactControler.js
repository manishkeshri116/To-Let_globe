const transporter = require('../config/nodemailerConfig');
const Submission = require('../models/submission');

const handleContactForm = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save submission to MongoDB
    const newSubmission = new Submission({ name, email, phone, message });
    await newSubmission.save();

    // Send email
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Message sent: ' + info.response);
    });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ date: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = {
  handleContactForm,
  getSubmissions
};
