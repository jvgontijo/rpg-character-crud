import axios from 'axios';

export const fetchCharacters = async () => {
  const response = await axios.get('http://localhost:5000/characters');
  return response.data;
};
