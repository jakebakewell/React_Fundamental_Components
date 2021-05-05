import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <BoxForm inputs={boxes} setInputs={setBoxes}/>
      <BoxDisplay boxes={boxes}/>
    </div>
  );
}

export default App;
