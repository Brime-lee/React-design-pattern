import { UncontrolledFlow } from './components/uncontrolled-flow';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1:Enter your name:</h1>
      <button onClick={() => goNext({ name: 'Brime' })}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter your age</h1>
      <button onClick={() => goNext({ age: '20' })}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3: Enter your country:</h1>
      <button onClick={() => goNext({ country: 'Mars' })}>Next</button>
    </>
  );
};

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
      <h3>Title:UnControlled Flow</h3>
      <UncontrolledFlow
        onDone={(data) => {
          console.log('onDone data :>> ', data);
          alert('Yaeee, You made it to the final step!');
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </div>
  );
}

export default App;
