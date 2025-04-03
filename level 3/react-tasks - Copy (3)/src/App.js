import BasicFormikForm from './components/BasicFormikForm';
import MultiFieldForm from './components/MultiFieldForm';
import ValidatedForm from './components/ValidatedForm';
import KeyedList from './components/KeyedList';
import ComplexForm from './components/ComplexForm';
import SearchList from './components/SearchList';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Level 3 Tasks</h1>
      
      <BasicFormikForm />
      <hr />
      
      <MultiFieldForm />
      <hr />
      
      <ValidatedForm />
      <hr />
      
      <KeyedList />
      <hr />
      
      <ComplexForm />
      <hr />
      
      <SearchList />
    </div>
  );
}

export default App;