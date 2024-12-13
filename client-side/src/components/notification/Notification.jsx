import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
  });
  const [priority, setPriority] = useState('standard');
  const [quietHours, setQuietHours] = useState({ start: '', end: '' });
  const [history, setHistory] = useState([
    { id: 1, message: 'Account login detected', date: '2024-12-01' },
    { id: 2, message: 'Password changed successfully', date: '2024-12-02' },
  ]);

  const toggleNotification = (type) => {
    setNotifications({ ...notifications, [type]: !notifications[type] });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Notification Settings</h2>

        {/* Notification Preferences */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Preferences</h3>
          <div className="grid grid-cols-3 gap-6">
            {Object.keys(notifications).map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={type}
                  checked={notifications[type]}
                  onChange={() => toggleNotification(type)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor={type} className="ml-2 text-sm text-gray-700 capitalize">
                  {type} Notifications
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Settings */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Priority</h3>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="critical">Critical</option>
            <option value="standard">Standard</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Quiet Hours */}
        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Quiet Hours</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Time</label>
              <input
                type="time"
                value={quietHours.start}
                onChange={(e) => setQuietHours({ ...quietHours, start: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Time</label>
              <input
                type="time"
                value={quietHours.end}
                onChange={(e) => setQuietHours({ ...quietHours, end: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </div>

        {/* Notification History */}
        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-4">Notification History</h3>
          <ul className="divide-y divide-gray-200">
            {history.map((item) => (
              <li key={item.id} className="py-4 flex justify-between">
                <span className="text-gray-700">{item.message}</span>
                <span className="text-sm text-gray-500">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
