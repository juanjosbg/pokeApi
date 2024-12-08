import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../lib/pokeApi";
import { usePokemonContext } from "../context/PokemonContext";

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

const Cards: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const { setSelectedPokemon } = usePokemonContext();

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const uniqueIds = new Set<number>();
        while (uniqueIds.size < 8) {
          const randomId = Math.floor(Math.random() * 100) + 1; // IDs de 1 a 100
          uniqueIds.add(randomId);
        }

        const promises = Array.from(uniqueIds).map((id) =>
          fetchPokemon(id.toString())
        );
        const results = await Promise.all(promises);
        setPokemons(results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    getPokemons();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {pokemons.map((pokemon, index) => (
        <div
          key={index}
          className="flex items-center p-2 rounded-lg shadow hover:shadow-lg bg-purple-50 px-4"
        >
          {/* Imagen del Pokémon */}
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="rounded-full w-20 h-20 object-cover border-2 border-white"
          />

          {/* Detalles del Pokémon */}
          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold text-gray-900 uppercase">
              {pokemon.name}
            </h2>
            <p className="text-md text-gray-600">
              {pokemon.types.join(", ")}
            </p>

            {/* Botón para ver más detalles */}
            <button
              onClick={() => setSelectedPokemon(pokemon)}
              className="text-blue-500 hover:underline"
            >
              Ver Detalles
            </button>
          </div>

          {/* Botón de favoritos */}
          <button
            onClick={() =>
              console.log(`${pokemon.name} removed from favorites`)
            }
            className="text-[#d0d0d0] hover:text-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
