import React, { useState } from 'react';

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [remainingUploads, setRemainingUploads] = useState(7);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Perform file upload logic using fetch
    // Replace the dummy URL with your actual API endpoint for file upload
    fetch('https://api.example.com/upload', {
      method: 'POST',
      body: selectedFiles,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        setRemainingUploads(remainingUploads - 1);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div className="upload-page">
      <h2>Upload Page</h2>
      <div>
        <p>Supported file types:</p>
        <ul>
          <li>Photos/Vectors: JPG, PNG, PSD, AI, and SVG images up to 40 MB with at least 3000 pixels along one side.</li>
          <li>Videos: MPEG, MOV, and AVI videos up to 300 MB and a minimum resolution of 1920x800 pixels. Clips should be no longer than 60 seconds.</li>
          <li>Music: MP3, WAV, AAC, FLAC, AIF, and M4A music up to 100MB file size limit. Duration should be no longer than 15 minutes.</li>
        </ul>
        <p>Drag and drop media files anywhere on the page</p>
        <p>{remainingUploads} uploads remaining this week. Learn more...</p>
        <input type="file" multiple onChange={handleFileSelect} className="upload-input" />
        <button onClick={handleUpload} className="upload-button">Upload</button>
        <p>Media in high demand</p>
      </div>
    </div>
  );
};

export default UploadPage;
