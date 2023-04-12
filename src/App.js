import './App.css';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsClass from './components/PropsClass';
import PropsFunctional from './components/PropsFunctional';

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hi/>
      <PropsFunctional name = "Abrar" heroName  = "Super Man"/>
      <PropsClass name = "Nadia" heroName = "Wonder Woman"/>
    </div>
  );
}

export default App;
