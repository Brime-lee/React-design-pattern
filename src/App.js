import { LargeBookListItem } from './components/books/largeListItems';
import { Modal } from './components/modal';
import { books } from './data/books';

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
