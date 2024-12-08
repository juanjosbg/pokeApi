import React from "react";
import { usePokemonContext } from "../context/PokemonContext";

const PokemonDetail: React.FC = () => {
  const { selectedPokemon } = usePokemonContext();

  if (!selectedPokemon) {
    return <p>Selecciona un Pokémon para ver los detalles.</p>;
  }

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        src={selectedPokemon.image}
        alt={selectedPokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-bold text-center mt-4">
        {selectedPokemon.name}
      </h2>
      <p className="text-center text-gray-600">
        Tipos: {selectedPokemon.types.join(", ")}
      </p>
    </div>
  );
};

export default PokemonDetail;
