import React, { useState } from 'react';
import Home from './pages/home';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";


function App(): JSX.Element {
  const [isLightMode, setIsLightMode] = useState<boolean>(false)

  function renderDisplayMode(isLightMode: boolean): string {
    return isLightMode ? "light" : "dark";
  }

  function setDisplayMode(): void {
    setIsLightMode(isLightMode => !isLightMode)
  }

  return (
    <div className={`App ${renderDisplayMode(isLightMode)}`}>
      <Navbar onChangeDisplayMode={setDisplayMode} isLight={isLightMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
