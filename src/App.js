import { SplitScreen } from './components/split-screen';

const LeftSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: 'red' }}>I am {title}</h2>;
};
const RightSideComp = ({ title }) => {
  return <h2 style={{ backgroundColor: 'green' }}>I am {title}</h2>;
};

function App() {
  return (
    // <SplitScreen
    //   Left={LeftSideComp}
    //   Right={RightSideComp}
    //   leftWidth={1}
    //   rightWidth={3}
    // />
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={'left'} />
      <RightSideComp title={'right'} />
    </SplitScreen>
  );
}

export default App;
