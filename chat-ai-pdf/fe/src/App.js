import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function App() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle PDF drop using react-dropzone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
    accept: '.pdf',
    maxFiles: 1,
  });

  // Upload PDF
  const handleUpload = async () => {
    if (!file) {
      alert('Please upload a PDF first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setUploadStatus('Uploading...');
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadStatus(response.data.message);
    } catch (error) {
      console.error('Error uploading PDF:', error);
      setUploadStatus('Error uploading PDF.');
    }
  };

  // Ask a question
  const handleAskQuestion = async () => {
    if (!question) {
      alert('Please enter a question.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/ask', { question });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
      alert('Error getting answer from the server.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Upload PDF and Ask Questions</h1>

      {/* Dropzone to upload PDF */}
      <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', marginBottom: '20px' }}>
        <input {...getInputProps()} />
        <p>Drag & drop a PDF file here, or click to select one</p>
      </div>
      {file && <p>Selected file: {file.name}</p>}

      <button onClick={handleUpload} style={{ marginBottom: '20px' }}>Upload PDF</button>
      <p>{uploadStatus}</p>

      {/* Question input */}
      <div>
        <input
          type="text"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ marginRight: '10px', padding: '5px', width: '300px' }}
        />
        <button onClick={handleAskQuestion}>Ask Question</button>
      </div>

      {/* Display Answer */}
      {answer && (
        <div style={{ marginTop: '20px' }}>
          <h2>Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
