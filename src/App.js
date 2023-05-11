import './App.css';
import Counter from './components/Counter';
import GreetUser from './components/GreetUser';
import Hello from './components/Hello';
import Hi from './components/Hi';
import PropsClass from './components/PropsClass';
import PropsFunctional from './components/PropsFunctional';
import State from './components/State';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hi />
      <PropsFunctional name="Abrar" heroName="Super Man" />
      <PropsClass name="Nadia" heroName="Wonder Woman of Bangladesh" />
      <State />
      <Counter />
      <GreetUser/>
    </div>
  );
}

export default App;
