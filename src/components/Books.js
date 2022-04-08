import { useSelector } from 'react-redux';
import Book from '../Book';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="booksContaner">
      <ul className="bookList">
        {books.map((book) => <li key={book.id}><Book data={book} /></li>)}
      </ul>
    </div>
  );
};

export default Books;
