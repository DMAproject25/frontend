import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "antd/dist/reset.css";


function App() {
  return (
    <div className="phone-container">
      <div className="app-content">
        {/* Ваше содержимое приложения */}
        <h1 className= "pohuy">Мой кент</h1>
        <p>Это контейнер размером с мобильный экран</p>
      </div>
    </div>
    
  );
}

export default App;