import React, { createContext, useContext, useState, ReactNode } from "react";

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

interface PokemonContextType {
  selectedPokemon: Pokemon | null;
  setSelectedPokemon: (pokemon: Pokemon) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
};

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  return (
    <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
