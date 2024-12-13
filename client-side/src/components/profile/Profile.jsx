import React, { useState } from 'react';

const Profile = () => {
  const [basicInfo, setBasicInfo] = useState({
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    profilePicture: '', // Profile picture field
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    activeSessions: [
      { id: 1, device: 'Chrome - Windows', location: 'New York, USA' },
      { id: 2, device: 'Safari - macOS', location: 'California, USA' },
    ],
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'English',
  });

  const [advancedSettings, setAdvancedSettings] = useState({
    apiTokens: [],
    dataExport: false,
  });

  const [help, setHelp] = useState({
    faq: [
      { question: 'How to change my password?', answer: 'Go to security settings and click change password.' },
      { question: 'How to export my data?', answer: 'Go to advanced settings and click on data export.' },
    ],
    contactSupport: '',
  });

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBasicInfo((prevInfo) => ({
          ...prevInfo,
          profilePicture: reader.result, // Set the profile picture URL
        }));
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Profile Settings</h2>

        {/* Basic Information */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Basic Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 flex justify-center mb-6">
              {/* Profile Picture */}
              {basicInfo.profilePicture ? (
                <img
                  src={basicInfo.profilePicture} // Display uploaded image
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-white">
                  <span className="text-xl">No Image</span> {/* Placeholder */}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={basicInfo.name}
                onChange={(e) => setBasicInfo({ ...basicInfo, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={basicInfo.username}
                onChange={(e) => setBasicInfo({ ...basicInfo, username: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={basicInfo.email}
                onChange={(e) => setBasicInfo({ ...basicInfo, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange} // Handle image upload
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
          </div>
        </section>

        {/* Security Settings */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Security Settings</h3>
          <div>
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={securitySettings.twoFactorAuth}
                onChange={(e) => setSecuritySettings({ ...securitySettings, twoFactorAuth: e.target.checked })}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Enable Two-Factor Authentication</span>
            </label>
            <h4 className="text-lg font-medium text-gray-600 mb-2">Active Sessions</h4>
            <ul className="divide-y divide-gray-200">
              {securitySettings.activeSessions.map((session) => (
                <li key={session.id} className="py-2 flex justify-between">
                  <span>{session.device} - {session.location}</span>
                  <button className="text-red-600 text-sm">Logout</button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Preferences */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Preferences</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Theme</label>
              <select
                value={preferences.theme}
                onChange={(e) => setPreferences({ ...preferences, theme: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                value={preferences.language}
                onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
          </div>
        </section>

        {/* Advanced Settings */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Advanced Settings</h3>
          <button
            onClick={() => alert('Data Export Started!')}
            className="text-blue-600 underline"
          >
            Export Data
          </button>
        </section>

        {/* Help & Support */}
        <section className="mb-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">Help & Support</h3>
          <ul className="mb-4">
            {help.faq.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.question}</strong>
                <p>{item.answer}</p>
              </li>
            ))}
          </ul>
          <textarea
            value={help.contactSupport}
            onChange={(e) => setHelp({ ...help, contactSupport: e.target.value })}
            placeholder="Describe your issue..."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
        </section>
      </div>
    </div>
  );
};

export default Profile;
