import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import CounterHookPrevState from './components/CounterHookPrevState';
import Form from './components/Form';
import GreetUser from './components/GreetUser';
import Hello from './components/Hello';
import Hi from './components/Hi';
import HookCounterObject from './components/HookCounterObject';
import PersonList from './components/PersonList';
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
      <PersonList/>
      <Form/>
      <h2>React Hook</h2>
      <h3>useState Hook</h3>
      <CounterHook/>
      <h3>Counter Hook with Prev State</h3>
      <CounterHookPrevState/>

      <h2>useState with Object</h2>
      <HookCounterObject/>
    </div>
  );
}

export default App;
