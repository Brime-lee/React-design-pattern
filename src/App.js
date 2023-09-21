import { books } from './data/books';
import { LargeBookListItem } from './components/books/LargeListItems';
import { Modal } from './components/Modal';

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
