// Función para realizar el fetch
const fetchFromApi = async (path: string) => {
  const baseURL = import.meta.env.VITE_POKEAPI_URL || "https://pokeapi.co/api/v2/";
  try {
    const response = await fetch(`${baseURL}${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from: ${path}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching from API:", error);
    throw error;
  }
};

// Función para obtener y procesar los datos del Pokémon
export const fetchPokemon = async (identifier: string) => {
  try {
    const data = await fetchFromApi(`pokemon/${identifier}`);

    // Procesar y formatear los datos
    return {
      name: data.name,
      image: data.sprites.front_default,
      types: data.types.map((typeObj: { type: { name: string } }) => typeObj.type.name),
      stats: {
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        hp: data.stats[0].base_stat,
      },
    };
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};
