import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/pages/FileBrowser">Go to library</Link>
      </nav>
    </div>
  );
}

export default App;
