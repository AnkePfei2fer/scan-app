import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';
import Scan from './pages/Save/Save';
import FileBrowser from './pages/FileBrowser/FileBrowser';

function App(): JSX.Element {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/pages/Save">Scan</Link> |{' '}
        <Link to="/pages/FileBrowser">Got to library</Link>
      </nav>
    </div>
  );
}

export default App;
