import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Sidebar } from './Components/Sidebar';
import Content from './Components/Content'

function App() {
  return (
    <div className="App">
      <div style = {
      {
        width: '90%',
        margin: '0 auto'
      }
      } >
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
        
    </div>
  );
}

export default App;
