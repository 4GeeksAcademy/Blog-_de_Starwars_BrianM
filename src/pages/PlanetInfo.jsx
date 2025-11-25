import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const PlanetInfo = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    if (!store.planets || !store.planets[id - 1]) {
        return <div className="container text-warning text-center mt-5">Cargando datos del planeta...</div>;
    }

    const planetObj = {
        name: store.planets[id - 1].name,
        climate: store.planets[id - 1].climate,
        diameter: store.planets[id - 1].diameter,
        terrain: store.planets[id - 1].terrain,
        gravity: store.planets[id - 1].gravity,
        orbitalPeriod: store.planets[id - 1]['orbital_period'],
        population: store.planets[id - 1].population,
    };

    return (
        <div className='container details-container p-5 my-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <img className='img-fluid details-img' src='/src/assets/img/placeholder.png' alt='placeholder img' />
                </div>
                <div className='col-lg-6 p-3 text-center d-flex align-items-center flex-column justify-content-center text-white'>
                    <h1 className='mb-4 text-warning'>{planetObj.name}</h1>
                    <p className='text-white-50'>
                    {planetObj.name} es un mundo de {planetObj.terrain} con una atmósfera de {planetObj.climate}. 
                                Con una población de {planetObj.population} habitantes y una gravedad de {planetObj.gravity}, 
                                es un planeta vital para el equilibrio de la galaxia. 
                                Su diámetro de {planetObj.diameter} kilómetros lo convierte en un cuerpo celeste de gran tamaño, 
                                completando su órbita en solo {planetObj.orbitalPeriod} días terrestres.
                    </p>
                </div>
            </div>

            <div className='details-divider my-5'></div>
        
            <div className='row d-flex justify-content-center align-items-center info-row text-center text-white'>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Population:</h3>
                    <span className='text-warning fs-4'>{planetObj.population}</span>
                </div>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Climate:</h3>
                    <span className='text-warning fs-4'>{planetObj.climate}</span>
                </div>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Terrain:</h3>
                    <span className='text-warning fs-4'>{planetObj.terrain}</span>
                </div>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Gravity:</h3>
                    <span className='text-warning fs-4'>{planetObj.gravity}</span>
                </div>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Orbital Period:</h3>
                    <span className='text-warning fs-4'>{planetObj.orbitalPeriod}</span>
                </div>
                <div className='col-lg-2 col-6 p-3'>
                    <h3 className='text-white-50 fs-5'>Diameter:</h3>
                    <span className='text-warning fs-4'>{planetObj.diameter}</span>
                </div>
            </div>
        </div>
    );
};

export default PlanetInfo;