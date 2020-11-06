import React from 'react';
import logo from './logo.svg';
import SimpleCounter from './components/SimpleCounter'
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleCounter startingNumber={1}/>
    </div>
  );
}

export default App;
