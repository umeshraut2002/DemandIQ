import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}>
      {/* Sidebar */}
      <div className="flex h-screen">
        <aside className="flex flex-col w-64 text-white bg-blue-900">
          <div className="p-4 text-lg font-bold">AI Demand Forecast</div>
          <nav className="flex-grow">
            <ul>
              <li className="p-4 hover:bg-blue-700">Home</li>
              <li className="p-4 hover:bg-blue-700">Dashboard</li>
              <li className="p-4 hover:bg-blue-700">Upload Data</li>
              <li className="p-4 hover:bg-blue-700">Notifications</li>
              <li className="p-4 hover:bg-blue-700">Settings</li>
            </ul>
          </nav>
          <button className="p-2 m-4 bg-purple-600 rounded hover:bg-purple-700">Upgrade Plan</button>
          <button className="p-2 m-4 bg-red-600 rounded hover:bg-red-700">Logout</button>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">AI Demand Forecast</h1>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded"
              />
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-200 rounded dark:bg-gray-700"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* KPI Cards */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="text-lg font-bold">Prediction Accuracy</h2>
              <p className="text-2xl">92%</p>
              <span className="text-green-500">Improved by 5% this week</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="text-lg font-bold">Inventory Health</h2>
              <p className="text-2xl">88%</p>
              <span className="text-red-500">12% overstock rate</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="text-lg font-bold">Cost Savings</h2>
              <p className="text-2xl">$10,243</p>
              <span className="text-green-500">Last 30 days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {/* High-Demand Products */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="text-lg font-bold">High-Demand Products</h2>
              <ul className="pl-5 list-disc">
                <li>Product A - 120 units/day</li>
                <li>Product B - 95 units/day</li>
                <li>Product C - 80 units/day</li>
              </ul>
            </div>

            {/* Loss-Making Stock */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800">
              <h2 className="text-lg font-bold">Loss-Making Stock</h2>
              <ul className="pl-5 list-disc">
                <li>Product X - Loss $500</li>
                <li>Product Y - Loss $300</li>
              </ul>
            </div>
          </div>

          {/* Getting Started Guide */}
          <div className="p-4 mt-6 bg-white rounded shadow dark:bg-gray-800">
            <h2 className="text-lg font-bold">Getting Started Guide</h2>
            <ol className="pl-5 list-decimal">
              <li>Upload historical data</li>
              <li>Review the dashboard</li>
              <li>Download the report</li>
            </ol>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;

