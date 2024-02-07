import { ControlledForm } from './components/controlled-form';
import { UncontrolledForm } from './components/uncontrolled-form';

function App() {
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #000 ',
        borderRadius: '4px',
      }}
    >
      <h3>Title: Uncontrolled form and Controlled form</h3>
      {/* <UncontrolledForm /> */}
      <ControlledForm />
    </div>
  );
}

export default App;
