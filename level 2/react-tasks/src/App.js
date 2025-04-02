import FunctionalGreeting from './components/FunctionalGreeting';
import ClassGreeting from './components/ClassGreeting';
import PropGreeting from './components/PropGreeting';
import DefaultPropGreeting from './components/DefaultPropGreeting';
import MultipleProps from './components/MultipleProps';
import PropTypesDemo from './components/PropTypesDemo';
import Counter from './components/Counter';
import ToggleContent from './components/ToggleContent';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Level 2 Tasks</h1>
      
      <FunctionalGreeting />
      <hr />
      
      <ClassGreeting />
      <hr />
      
      <PropGreeting name="Alice" />
      <hr />
      
      <DefaultPropGreeting />
      <hr />
      
      <MultipleProps name="vignesh" age={25} city="New York" />
      <hr />
      
      <PropTypesDemo name="rijatharik.m" age={30} />
      <hr />
      
      <Counter />
      <hr />
      
      <ToggleContent />
    </div>
  );
}

export default App;