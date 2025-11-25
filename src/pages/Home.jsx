import useGlobalReducer from '../hooks/useGlobalReducer.jsx';
import { actionTypes } from '../store.js';
import { useEffect } from 'react';
import { getAllCharacters, getAllPlanets, getAllVehicles } from '../services/fetch.js';
import CharacterCard from '../cards/CharacterCard.jsx';
import PlanetCard from '../cards/PlanetCard.jsx';
import VehicleCard from '../cards/VehicleCard.jsx';

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
   const init = async () => {
   const characters = await getAllCharacters();
   dispatch({ type: actionTypes.getCharacters, payload: characters });
   const planets = await getAllPlanets();
   dispatch({ type: actionTypes.getPlanets, payload: planets });
   const vehicles = await getAllVehicles();
   dispatch({ type: actionTypes.getVehicles, payload: vehicles });
   };
   init();
  }, []);

 return (
      <div className='container-fluid star-wars-home'> 
      
            <div className='row mb-3 pt-5'>
                  <h2 className='text-warning fs-1 section-title'>Characters ⭐️</h2>
            </div>
            <div className='row'>
                  {store.characters &&
                  store.characters.map((character, index) => {
                  return (
                  <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
                        <CharacterCard
                              id={index + 1}
                              name={character.name}
                              gender={character.gender}
                              hairColor={character['hair_color']}
                              eyeColor={character['eye_color']}
                        />
                  </div>
                  );
                  })}
            </div>
      
            <div className='row section-separator mb-5'></div>
                  <div className='row mb-3 pt-5'>
                        <h2 className='text-warning fs-1 section-title'>Planets 🪐</h2>
            </div>
            <div className='row'>
                  {store.planets && store.planets.map((planet, index) => {
                  return (
                        <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
                              <PlanetCard
                                    id={index + 1}
                                    name={planet.name}
                                    population={planet.population}
                                    diameter={planet.diameter}
                                    terrain={planet.terrain}
                              />
                        </div>
                  );
                  })}
            </div>
      
            <div className='row section-separator mb-5'></div>
            <div className='row mb-3 pt-5'>
                  <h2 className='text-warning fs-1 section-title'>Vehicles 🚀</h2>
            </div>
            <div className='row pb-5'>
                  {store.vehicles && store.vehicles.map((vehicle, index) => {
                  return (
                        <div key={index} className='col-xxl-3 col-lg-4 col-md-6 mb-5 d-flex'>
                              <VehicleCard
                                    id={index + 1}
                                    name={vehicle.name}
                                    model={vehicle.model}
                                    crew={vehicle.crew}
                                    manufacturer={vehicle.manufacturer}
                              />
                        </div>
                  );
                  })}
            </div>
      </div>
 );
};

export default Home;