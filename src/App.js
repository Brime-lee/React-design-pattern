import { useState } from 'react';
import { ControlledModal } from './components/controlled-modal';

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #000 ',
        borderRadius: '4px',
      }}
    >
      <h3>Title:Controlled Modal</h3>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? 'Hide Modal' : 'Display Modal'}
      </button>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal</h3>
      </ControlledModal>
    </div>
  );
}

export default App;
