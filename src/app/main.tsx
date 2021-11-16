import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Scan from './pages/Save/Save';
import FileBrowser from './pages/FileBrowser/FileBrowser';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/pages/Save/" element={<Scan />} />
      <Route path="/pages/FileBrowser/" element={<FileBrowser />} />
    </Routes>
  </BrowserRouter>,
  document.querySelector('#root')
);
