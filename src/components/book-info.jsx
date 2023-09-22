export const BookInfo = ({ book }) => {
  const { name, price, title, pages } = book || {};
  return book ? (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <p>Number of pages:{pages}</p>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
