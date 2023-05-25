import './App.css';
import UseStatewithArray from './components/UseStatewithArray';
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
import LifeCycleMethodA from './components/LifeCycleMethodA';
import CounterUseEffectHook from './components/CounterUseEffectHook';

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

      <h2>useState with Array</h2>
      <UseStatewithArray/>

      <h2>Life Cycle Method - Mounting</h2>
      <LifeCycleMethodA/>

      <h2>Use Effect Hook Counter</h2>
      <CounterUseEffectHook/>
    </div>
  );
}

export default App;
