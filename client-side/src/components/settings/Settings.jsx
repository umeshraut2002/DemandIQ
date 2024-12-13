import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('preferences');
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState({ email: true, push: false, sms: false });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 flex justify-between px-4">
          {['preferences', 'account', 'security', 'advanced', 'help'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-4 text-center text-gray-700 font-medium hover:bg-gray-100 focus:outline-none ${
                activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : ''
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'preferences' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">User Preferences</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Theme</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Notifications</label>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    {Object.keys(notifications).map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={type}
                          checked={notifications[type]}
                          onChange={(e) =>
                            setNotifications({ ...notifications, [type]: e.target.checked })
                          }
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={type} className="ml-2 text-sm text-gray-700 capitalize">
                          {type} Notifications
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'account' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Management</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Update Email</label>
                  <input
                    type="email"
                    placeholder="Enter new email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Change Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                </div>

                <div className="col-span-2 flex justify-center">
                  <button className="px-6 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Security and Privacy</h2>
              <ul className="list-disc list-inside space-y-4">
                <li className="text-gray-700">Enable Two-Factor Authentication</li>
                <li className="text-gray-700">Manage Trusted Devices</li>
                <li className="text-gray-700">View Privacy Policy</li>
              </ul>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Advanced Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">API Key</label>
                  <input
                    type="text"
                    placeholder="Generate API Key"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  />
                  <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Generate
                  </button>
                </div>
                <div>
                  <p className="text-gray-700">Manage Integrations with third-party services.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'help' && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Help and Support</h2>
              <div className="space-y-4">
                <p className="text-gray-700">Access our detailed documentation to get started.</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Contact Support
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
                  Submit Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
