import { LargeAuthorListItem } from './components/authors/largeListItems';
import { SmallAuthorListItem } from './components/authors/smallListItems';
import { LargeBookListItem } from './components/books/largeListItems';
import { SmallBookListItem } from './components/books/smallListItems';
import { NumberedList } from './components/lists/Numbered';
import { RegularList } from './components/lists/regular';
import { authors } from './data/authors';
import { books } from './data/books';

function App() {
  return (
    <>
      <h2>Small List</h2>
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />

      <h2>Large List</h2>
      <NumberedList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />

      <h2>Small Books List</h2>
      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem}
      />

      <h2>Large Books List</h2>
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
