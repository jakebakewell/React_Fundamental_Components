import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Joe" lastName="Bob" age={50} hairColor="Gray"/>
      <PersonCard firstName="Jennifer" lastName="Snow" age={23} hairColor="Blonde"/>
      <PersonCard firstName="Keith" lastName="Summer" age={34} hairColor="Brown"/>
      <PersonCard firstName="Autumn" lastName="Falls" age={17} hairColor="Black"/>
    </div>
  );
}

export default App;
