// App.js
import React from 'react';
import Myself from '../components/Myself';
import Whoami from '../components/Whoami';
import Projecthome from '../components/Projecthome';
import Sayhello from '../components/Sayhello';
import './Homepage.module.css';

function App() {
  return (
    <div className="container">
      <Myself />
      <Whoami />
      <Projecthome />
      <Sayhello />
    </div>
  );
}

export default App;
