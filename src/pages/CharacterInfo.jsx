import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { useParams } from 'react-router-dom';

const CharacterInfo = () => {
  const { store } = useGlobalReducer();
  const { id } = useParams();

    if (!store.characters || !store.characters[id - 1]) {
        return <div className="container text-danger text-center mt-5">Cargando datos del personaje...</div>;
    }
  
  const characterObj = {
    name: store.characters[id - 1].name,
    birthYear: store.characters[id - 1]['birth_year'],
    gender: store.characters[id - 1].gender,
    height: store.characters[id - 1].height,
    mass: store.characters[id - 1].mass,
    eyeColor: store.characters[id - 1]['eye_color'],
    skinColor: store.characters[id - 1]['skin_color'],
  };

  return (
    <div className='container details-container p-5 my-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='img-fluid details-img' src='/src/assets/img/placeholder.png' alt='placeholder img' />
        </div>
        <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center text-white'>
          <h1 className='mb-4 text-warning'>{characterObj.name}</h1>
          <p className='text-white-50'>
            {characterObj.name} es una figura crucial en la galaxia, con un pasado tan enigmático como su presente. Desde su año de nacimiento ({characterObj.birthYear}) ha demostrado ser una fuerza a tener en cuenta. 
            Su historia está marcada por decisiones audaces que definieron su destino en las Guerras Clon y la posterior era del Imperio Galáctico. Es conocido por su estatura de {characterObj.height}cm y su particular color de piel 
            ({characterObj.skinColor}), características que lo hacen inconfundible en cualquier cantina de la Galaxia Exterior.
          </p>
        </div>
      </div>
      <div className='details-divider my-5'></div>
 
      <div className='row d-flex justify-content-center align-items-center info-row text-center text-white'>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Height:</h3>
          <span className='text-warning fs-4'>{characterObj.height}cm</span>
        </div>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Birth Year:</h3>
          <span className='text-warning fs-4'>{characterObj.birthYear}</span>
        </div>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Gender:</h3>
          <span className='text-warning fs-4'>{characterObj.gender}</span>
        </div>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Eye Color:</h3>
          <span className='text-warning fs-4'>{characterObj.eyeColor}</span>
        </div>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Mass:</h3>
          <span className='text-warning fs-4'>{characterObj.mass}kg</span>
        </div>
        <div className='col-lg-2 col-6 p-3'>
          <h3 className='text-white-50 fs-5'>Skin Color:</h3>
          <span className='text-warning fs-4'>{characterObj.skinColor}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;