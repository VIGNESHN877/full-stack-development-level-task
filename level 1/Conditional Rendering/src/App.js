
import UserGreeting from './UserGreeting';

function App() {
  return (
    <div>
      
      
      <div>
        <UserGreeting role="Admin" name="John" />
        <UserGreeting role="User" name="Jane" />
        <UserGreeting />
      </div>
    </div>
  );
}

export default App;