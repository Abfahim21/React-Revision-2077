import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import Form from './components/Form';
import GreetUser from './components/GreetUser';
import Hello from './components/Hello';
import Hi from './components/Hi';
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
      <CounterHook/>
    </div>
  );
}

export default App;
