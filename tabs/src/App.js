import React, { useState } from 'react';
import Tabs from './components/Tabs';
import './App.css';
import ContentDisplay from './components/ContentDisplay';

function App() {
  const [tabs, setTabs] = useState([]);
  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
      <ContentDisplay tabs={tabs}/>
    </div>
  );
}

export default App;
