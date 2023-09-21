export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <>
      <h2>{name}</h2>
      <p>age:{age}</p>
      <p>country:{country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => {
          return <li key={book}>{book} </li>;
        })}
      </ul>
    </>
  );
};
