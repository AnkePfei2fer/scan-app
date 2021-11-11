import React from 'react';

function Styleguide() {
  return (
    <div>
      <h2>colors</h2>
      <ul>
        <li style={{ color: 'var(--color-primary)' }}>primary color</li>
        <li style={{ color: 'var(--color-secondary)' }}>secondary color</li>
        <li style={{ color: 'var(--color-tertiary)' }}>tertiary color</li>
        <li style={{ color: 'var(--color-text-primary)' }}>
          text primary color
        </li>
        <li style={{ color: 'var(--color-text-secondary)' }}>
          text secondary color
        </li>
      </ul>
      <h2>text</h2>
      <h1 style={{ color: 'var(--color-primary)' }}>Headline 1</h1>
      <h2>Headline 2</h2>
      <p style={{ fontSize: '1.125rem' }}>filename</p>
      <p>link text</p>
      <h2>fields, buttons, arrows</h2>
      <div
        style={{
          background: 'var(--color-tertiary)',
          borderRadius: '10px',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          padding: '0.5rem',
          width: '200px',
          border: 'solid var(--color-text-secondary) 2px',
          margin: '2rem',
        }}
      >
        input text field
      </div>
      <div
        style={{
          background: 'var(--color-primary)',
          borderRadius: '10px',
          color: 'var(--color-text-primary)',
          textAlign: 'center',
          padding: '0.5rem',
          width: '150px',
          border: 'solid black 2px',
          margin: '2rem',
          fontSize: '1,25rem',
          fontWeight: 800,
        }}
      >
        button
      </div>
    </div>
  );
}

export default Styleguide;
