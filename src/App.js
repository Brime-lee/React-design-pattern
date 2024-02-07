import { UncontrolledFlow } from './components/uncontrolled-flow';

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2</h1>
      <button onClick={goNext}>Next</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Step #3</h1>
      <button onClick={goNext}>Next</button>
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
      <UncontrolledFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </div>
  );
}

export default App;
