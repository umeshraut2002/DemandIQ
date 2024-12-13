import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Dashboard = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}>
      {/* Sidebar */}
      <div className="flex">
        <aside className="fixed flex flex-col w-64 h-screen text-white bg-blue-900">
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
        <main className="flex-grow h-screen p-6 ml-64 overflow-y-auto">
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
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Product Quantity</h2>
              <p className="text-2xl">500 Units</p>
              <span className="text-green-500">Sufficient stock</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Cost of Order</h2>
              <p className="text-2xl">₹1,20,000</p>
              <span className="text-green-500">High-value order</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Stock Need</h2>
              <p className="text-2xl">100 Units</p>
              <span className="text-red-500">Restock required</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Profit Ratio</h2>
              <p className="text-2xl">25%</p>
              <span className="text-green-500">Healthy profit margin</span>
            </div>
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Loss Ratio</h2>
              <p className="text-2xl">5%</p>
              <span className="text-red-500">Minimal loss</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {/* High-Demand Products */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">High-Demand Products</h2>
              <ul className="pl-5 list-disc">
                <li>Product A - 120 units/day</li>
                <li>Product B - 95 units/day</li>
                <li>Product C - 80 units/day</li>
              </ul>
            </div>

            {/* Loss-Making Stock */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Loss-Making Stock</h2>
              <ul className="pl-5 list-disc">
                <li>Product X - Loss ₹500</li>
                <li>Product Y - Loss ₹300</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
            {/* Seasonal Insights */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Seasonal Insights</h2>
              <p>Festive seasons see a 30% rise in Product A sales. Stock accordingly!</p>
            </div>

            {/* Digital Payment Analytics */}
            <div className="p-4 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
              <h2 className="text-lg font-bold">Digital Payment Analytics</h2>
              <p>80% of transactions via UPI this month</p>
              <p>₹1,00,000 through online payments</p>
            </div>
          </div>

          {/* Profit/Loss Breakdown */}
          <div className="p-4 mt-6 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
            <h2 className="text-lg font-bold">Profit/Loss Breakdown</h2>
            <ul className="pl-5 list-disc">
              <li>Total Profit: ₹50,000</li>
              <li>Total Loss: ₹5,000</li>
              <li>Net Profit: ₹45,000</li>
            </ul>
          </div>

          {/* Getting Started Guide */}
          <div className="p-4 mt-6 bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700">
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

export default Dashboard;
