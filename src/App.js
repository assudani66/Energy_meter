import './App.css';
import React ,{useState} from 'react';
import { useContext } from 'react';
import energyContext from './Components/energyContext';
var energy_remaining = 100
var totalEnergy = 500
function App() {
  const [energyRemaining,setEnergyremaing] = useState(100)
  const energyCalculator = () =>{
    setEnergyremaing(energyRemaining - 25)
    console.log("Clicked")
  }
  return (
  <div> 
    <span>{energyRemaining}/{totalEnergy}</span>
    <span>Design a Life you Love</span>
    <br></br>
    <button onClick={energyCalculator}>Spend</button>
  </div>);
}


export default App;
