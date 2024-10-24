import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, my name is Sumit Kumar</h1>
        <p>And I am learning Docker!</p>
        <button onClick={() => alert('Welcome to my learning journey!')}>
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;
