import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { Link } from 'react-router-dom';
import { actionTypes } from '../store.js';


const CharacterCard = ({ id, name, gender, hairColor, eyeColor }) => {
  const { store, dispatch } = useGlobalReducer();
  const isFavourite = store.favorites.some(fav => fav.name === name);

  const handleAddToFav = () => {
    const action = isFavourite ? actionTypes.deleteFav : actionTypes.addToFav;
    dispatch({ type: actionTypes.addToFav, payload: { name, id } });
  };
  
  return (
    <div className='card' style={{ width: '18rem' }}> 
      <img src='/src/assets/img/placeholder.png' className='card-img-top' alt='placeholder image' />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        
        <span className='card-text d-block mb-2'>Gender: {gender}</span>
        <span className='card-text d-block mb-2'>Hair Color: {hairColor}</span>
        <span className='card-text d-block mb-2'>Eye Color: {eyeColor}</span>
        
        <div className='d-flex justify-content-between mt-3 pt-3 border-top border-secondary'>
          
          <Link 
            to={`details/character/${id}`} 
            className='btn border border-2 border-warning learn-more text-warning' 
          >
            Learn more!
          </Link>
          
          <button
            onClick={handleAddToFav}
            className={`heart-icon border ${isFavourite ? 'border-danger' : 'border-warning'} border-2 rounded p-1 d-flex justify-content-center align-items-center`}
          >
            <i className={`fa-${isFavourite ? 'solid' : 'regular'} fa-heart fs-3 ${isFavourite ? 'text-danger' : 'text-warning'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;