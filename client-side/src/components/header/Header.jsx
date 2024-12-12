import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const  Header = () => {
  const [user, setUser] = useState({ name: "John Doe", role: "Analyst" });
  const [kpis, setKpis] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [showGuide, setShowGuide] = useState(true);

  useEffect(() => {
    // Fetch user-specific data
    fetchUserDetails();
    fetchKpis();
    fetchNotifications();
  }, []);

  const fetchUserDetails = async () => {
    // Mock API call to fetch user details
    setUser({ name: "John Doe", role: "Analyst" });
  };

  const fetchKpis = async () => {
    // Mock API call to fetch KPI data
    setKpis([
      { title: "Prediction Accuracy", value: "92%", subtitle: "Improved by 5%" },
      { title: "Inventory Health", value: "Overstock 12%", subtitle: "Stockouts 5%" },
      { title: "Cost Savings", value: "$10,000", subtitle: "This Month" },
    ]);
  };

  const fetchNotifications = async () => {
    // Mock API call to fetch notifications
    setNotifications([
      { id: 1, text: "Product A is nearing stockout.", timestamp: "2 hours ago" },
      { id: 2, text: "Model retraining completed successfully.", timestamp: "1 day ago" },
    ]);
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
      {/* Top Section: Welcome and Quick Actions */}
      <div className="flex items-center justify-between p-6 bg-white rounded-lg shadow dark:bg-gray-800">
        <div>
          <h2 className="text-xl font-semibold dark:text-white">
            Welcome back, {user.name}! – {user.role}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Here’s what’s happening today.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link to="/dashboard" className="btn">📊 Dashboard</Link>
          <Link to="/upload" className="btn">📁 Upload Data</Link>
          <Link to="/notifications" className="btn">🔔 Notifications</Link>
          <Link to="/settings" className="btn">⚙️ Settings</Link>
        </div>
      </div>

      {/* Middle Section: Snapshot KPIs */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {kpis.map((kpi, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-lg font-medium dark:text-white">{kpi.title}</h3>
            <p className="text-2xl font-bold text-green-600">{kpi.value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{kpi.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Bottom Section: Notifications and Getting Started Guide */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Recent Notifications */}
        <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold dark:text-white">Recent Notifications</h3>
          <ul className="space-y-2">
            {notifications.map((notification) => (
              <li key={notification.id} className="text-sm text-gray-700 dark:text-gray-300">
                <span>{notification.text}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">
                  {notification.timestamp}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Getting Started Guide */}
        {showGuide && (
          <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <h3 className="text-lg font-semibold dark:text-white">Getting Started Guide</h3>
            <ol className="ml-6 space-y-2 text-gray-700 list-decimal dark:text-gray-300">
              <li>Upload historical data from the Upload Data page.</li>
              <li>Review the dashboard for key insights.</li>
              <li>Configure AI models in the Settings page.</li>
            </ol>
            <button
              className="mt-4 text-sm text-blue-500 dark:text-blue-400"
              onClick={() => setShowGuide(false)}
            >
              Dismiss Guide
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

der