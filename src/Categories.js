import { useDispatch } from 'react-redux';
import { checkStatus } from './redux/categories/categories';

const Categoriess = () => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <button type="button" onClick={handleCheckStatus}>Check status</button>
  );
};

export default Categoriess;
