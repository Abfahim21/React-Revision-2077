import './App.css';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsClass from './components/PropsClass';
import PropsFunctional from './components/PropsFunctional';

function App() {
  return (
    <div className="App">
      //Class Component and Functional Component
      <Hello/>
      <Hi/>
      //Props on Class and Functional Component
      <PropsFunctional name = "Abrar" heroName  = "Super Man"/>
      <PropsClass name = "Nadia" heroName = "Wonder Woman"/>
      //state on Class Component
    </div>
  );
}

export default App;
