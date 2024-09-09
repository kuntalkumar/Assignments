const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Set up Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Global variable to store extracted text
let extractedText = '';

// Endpoint to upload a PDF and extract its content
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Read the PDF file
    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text from PDF
    const data = await pdfParse(dataBuffer);
    extractedText = data.text;

    console.log(extractedText);  // For verification

    res.json({ message: 'PDF uploaded and text extracted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error processing PDF.' });
  }
});

// Endpoint to handle question answering
app.post('/ask', async (req, res) => {
  const { question } = req.body;
  const apikey = process.env.API_KEY;

  if (!extractedText) {
    return res.status(400).json({ message: 'No PDF content available.' });
  }

  try {
    const prompt = `Here is some information:\n\n${extractedText}\n\nAnswer the following question: ${question}`;

    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apikey}`,
      method: "post",
      data: {
        prompt: {
          text: prompt
        }
      }
    });

    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ message: 'Error getting answer from Gemini API.', error: error.message });
  }
});

// Set the port and start the server
const port = 8080;
app.listen(port, () => {
  console.log('Server running on port', port);
});