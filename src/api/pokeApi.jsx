export const fetchPokemon = async (pokemonName) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_POKEAPI_URL}pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      throw error;
    }
  };
  