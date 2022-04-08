import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRemoved } from './redux/books/books';

const Book = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, author } = data;
  const handelRemove = () => {
    dispatch(bookRemoved(id));
  };
  return (
    <div id={id} className="book">
      <h1>
        {name}
        {' '}
        by
        {' '}
        {author}
      </h1>
      <button type="button" className="btn" onClick={handelRemove}>remove</button>
    </div>
  );
};
Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
