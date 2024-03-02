import React, { useState } from 'react';
import '../App.css';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [username] = useState('MN7'); // Hardcoded username

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    // Check if the filename contains the username
    if (fileName.includes(username)) {
      // Store the file in local storage
      localStorage.setItem('uploadedFile', JSON.stringify(file));
      setSelectedFile(file);
      alert('File uploaded successfully');
    } else {
      alert('You are not allowed to upload this file');
    }
  };

  // Function to handle file download
  const handleFileDownload = () => {
    const storedFile = localStorage.getItem('uploadedFile');
    if (storedFile) {
      const file = JSON.parse(storedFile);
      const url = URL.createObjectURL(file);
      // Create a link element and trigger download
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      alert('No file uploaded yet');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button  className="btn" onClick={handleFileDownload}>Download File</button>
    </div>
  );
}

export default FileUploader;
