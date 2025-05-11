import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import CustomForm from './components/CustomForm';
import ImageUpload from './components/ImageUpload';
import TextInput from './components/TextInput';
import './styles/theme1.css';
import './styles/theme2.css';
import './styles/theme3.css';

const themes = ['theme1', 'theme2', 'theme3'];

function App() {
  const [themeIndex, setThemeIndex] = useState(0);
  useHotkeys('alt+q', () => setThemeIndex((prev) => (prev + 1) % 3));

  return (
    <div className={`app ${themes[themeIndex]}`}>
      <div className="left-panel">
        <ImageUpload />
      </div>
      <div className="right-panel">
        <CustomForm />
      </div>
      <div className="bottom-panel">
        <TextInput />
      </div>
    </div>
  );
}

export default App;
