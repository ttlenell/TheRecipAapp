import {useEffect, useState} from 'react';
import tastyAPI from '../api/tastyAPI';

export default () => {
  const [recipes, setRecipes] = useState([]);

  const searchAPI = async (searchTerm) => {
    try {
      const response = await tastyAPI.get('/search', {
        params: {
          from: '0',
          size: '20',
          term: searchTerm,
        },
      });
      setRecipes(response.data);
    } catch (error) {
      console.log('error:', error);
    }
  };

  useEffect(() => {
    searchAPI('recipes');
  }, []);
  return [searchAPI, recipes];
};
