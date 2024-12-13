import React from 'react'

const ReportPreview = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="p-6 border-b border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">Generated on {generatedAt}</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9V5a3 3 0 013-3h6a3 3 0 013 3v4M6 15V9m12 6V9m-6 6h6m-3-3H9m3 0H6m12 6h-6v4a3 3 0 01-3 3H9a3 3 0 01-3-3v-4h-6"
                />
              </svg>
            </button>
            <button
              onClick={() => onDownload(id)}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v12a1 1 0 001 1h14a1 1 0 001-1V4m-7 12l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Total Items</p>
            <p className="text-2xl font-semibold text-gray-900">{summary.totalItems}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Predicted Demand</p>
            <p className="text-2xl font-semibold text-gray-900">{summary.predictedDemand}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Confidence Score</p>
            <p className="text-2xl font-semibold text-gray-900">{summary.confidenceScore}%</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Recommendations</h3>
          <ul className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start space-x-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zM9 8h6M9 12h6M9 16h6"
                  />
                </svg>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReportPreview;
