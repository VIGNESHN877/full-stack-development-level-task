import HelloWorld from './HelloWorld';
import PersonalGreeting from './PersonalGreeting';
import NestedStructure from './NestedStructure';
import ImageDisplay from './ImageDisplay';
import CalculationDisplay from './CalculationDisplay';
import ColoredBox from './ColoredBox';
import StaticList from './StaticList';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div>
      
       <HelloWorld /> 
       <PersonalGreeting /> 
      <NestedStructure /> 
       <ImageDisplay /> 
      <CalculationDisplay /> 
      
      <div>
        <ColoredBox color="red" />
        <ColoredBox color="green" />
        <ColoredBox /> 
      </div> 
      <StaticList />
      <div>
        <UserGreeting role="Admin" name="John" />
        <UserGreeting role="User" name="Jane" />
        <UserGreeting />
      </div>
    </div>
  );
}

export default App;