import { Routes } from 'react-router';
import Header from './components/Header';
import AnalogClock from './components/AnalogClock';
import Navigation from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <AnalogClock/>
      <Navigation/>
    </div>
  );
}

export default App;
