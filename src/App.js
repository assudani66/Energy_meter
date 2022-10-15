import './App.css';
import energyContext from './Components/energyContext';
var energy_remaining = 100
var totalEnergy = 500
function App() {
  return (<span>{energy_remaining}/{totalEnergy}<span>Design a Life you Love</span></span>);
  <energyContext.Provider value={energy}>
    
  </energyContext.Provider>
}

export default App;
