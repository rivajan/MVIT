// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [useDyslexiaFont, setUseDyslexiaFont] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file); // Placeholder for your file upload logic
  };

  const handleSettingsClick = () => {
    setShowSettings(!showSettings); // Toggle visibility of settings submenu
  };

  const toggleDyslexiaFont = () => {
    setUseDyslexiaFont(!useDyslexiaFont);
  };

  return (
    <div className={`App ${useDyslexiaFont ? 'dyslexia-font' : ''}`}>
      <header className="App-header">
        <h1>Image Translation Project</h1>
      </header>
      <nav className="App-menu">
        <input
          type="file"
          onChange={handleFileUpload}
          id="fileUpload"
          style={{ display: 'none' }}
          aria-label="Upload Image"
        />
        <label htmlFor="fileUpload" className="upload-button" tabIndex={0}>
          Upload Image
        </label>
        <button onClick={handleSettingsClick} className="menu-button settings-button" tabIndex={0}>
          Settings
        </button>
        {showSettings && (
          <div className="settings-options">
            <button onClick={toggleDyslexiaFont} className="menu-button submenu-button">
              Toggle Dyslexia Font
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default App;
