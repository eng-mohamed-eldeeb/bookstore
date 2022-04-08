import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdded } from './redux/books/books';

const Addform = () => {
  const [author, setAuther] = useState('');
  const [bookName, setBookName] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAdded(bookName, author));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a book</h3>
      <input value={bookName} onChange={(e) => { setBookName(e.target.value); }} type="text" placeholder="book name" required />
      <input value={author} onChange={(e) => { setAuther(e.target.value); }} type="text" placeholder="author name" required />
      <button type="submit">submit</button>
    </form>
  );
};

export default Addform;
