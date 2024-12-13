import React, { useState } from 'react';

const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewData, setPreviewData] = useState(null);
  const [error, setError] = useState('');

  const allowedFileTypes = ['.xlsx', '.csv', '.json', '.txt'];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validatedFiles = files.filter((file) => {
      const isValidType = allowedFileTypes.some((type) => file.name.endsWith(type));
      if (!isValidType) {
        setError(`Invalid file type: ${file.name}`);
      }
      return isValidType;
    });

    setUploadedFiles((prev) => [...prev, ...validatedFiles]);
    setError('');
  };

  const handleFileRemove = (fileName) => {
    setUploadedFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const handlePreview = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target.result;
        setPreviewData(content);
      } catch (error) {
        setError('Failed to preview file content.');
      }
    };
    reader.readAsText(file);
  };

  const handleProcessFiles = () => {
    if (uploadedFiles.length === 0) {
      setError('No files uploaded for processing.');
      return;
    }

    alert('Files are being processed for forecasting.');
    // Add logic to send files to backend or process them for inventory forecasting.
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inventory Demand Forecast</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Files</label>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {uploadedFiles.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Uploaded Files</h3>
            <ul className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm hover:shadow-lg transition"
                >
                  <span className="text-sm text-gray-800">{file.name}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePreview(file)}
                      className="text-blue-600 text-sm underline hover:text-blue-800"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => handleFileRemove(file.name)}
                      className="text-red-600 text-sm underline hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {previewData && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">File Preview</h3>
            <textarea
              readOnly
              value={previewData}
              className="w-full h-40 p-2 border border-gray-300 rounded-md bg-gray-50 text-sm text-gray-800 focus:outline-none"
            />
          </div>
        )}

        <button
          onClick={handleProcessFiles}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Process Files
        </button>
      </div>
    </div>
  );
};

export default Upload;
