import React, { useState } from 'react';

function App() {
  const [output, setOutput] = useState('');

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  function handleClick(value) {
    if (value === "=") {
      try {
        setOutput(eval(output)); // simple eval for demo purposes
      } catch {
        setOutput("Error");
      }
    } else {
      setOutput(output + value);
    }
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#f0f0f0',
    fontFamily: 'sans-serif'
  };

  const displayStyle = {
    width: '220px',
    marginBottom: '10px',
    padding: '10px',
    fontSize: '24px',
    background: '#fff',
    textAlign: 'right',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 55px)',
    gap: '5px'
  };

  const buttonStyle = {
    padding: '15px',
    fontSize: '18px',
    borderRadius: '5px',
    border: '1px solid #aaa',
    background: '#ddd',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <div style={displayStyle}>{output || "0"}</div>
      <div style={gridStyle}>
        {buttons.map(btn => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            style={buttonStyle}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
