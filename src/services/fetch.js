const BASE_URL = 'https://swapi.py4e.com/api';

export const getAllCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/people`);
    if (!response.ok) {
      throw new Error('Could not fetch all the people!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getAllPlanets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/planets`);
    if (!response.ok) {
      throw new Error('Could not fetch all the planets!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getAllVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles`);
    if (!response.ok) {
      throw new Error('Could not fetch all the vehicles!');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};