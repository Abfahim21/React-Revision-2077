import './App.css';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsClass from './components/PropsClass';
import PropsFunctional from './components/PropsFunctional';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hi/>
      <PropsFunctional name = "Abrar" heroName  = "Super Man"/>
      <PropsClass name = "Nadia" heroName = "Wonder Woman"/>
      <State/>
    </div>
  );
}

export default App;
