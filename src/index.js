import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/global.css';
import { App } from './app';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаем корневой элемент
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
