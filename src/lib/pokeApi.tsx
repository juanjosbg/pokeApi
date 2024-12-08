/* export const fetchPokemon = async (pokemonName: string) => {
  try {
    const baseURL = import.meta.env.VITE_POKEAPI_URL || "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();

    return {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((typeObj: { type: { name: string } }) => typeObj.type.name),
    };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
 */

export const fetchPokemon = async (identifier: string) => {
  try {
    const baseURL = import.meta.env.VITE_POKEAPI_URL || "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon/${identifier}`);
    
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await response.json();

    return {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((typeObj: { type: { name: string } }) => typeObj.type.name),
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      hp: data.stats[0].base_stat, 
    };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
