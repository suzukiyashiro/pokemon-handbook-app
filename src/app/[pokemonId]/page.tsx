"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getPokemon } from "@/lib/actions";

interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null); // 単一のポケモンを保持するように修正
  const pathname = usePathname();
  const pokemonId = pathname.split("/")[1];

  useEffect(() => {
    fetchPokemon(); // 関数名を fetchPokemon に修正
  }, []);

  const fetchPokemon = async () => {
    try {
      const _pokemon = await getPokemon(pokemonId);
      setPokemon(_pokemon);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold capitalize text-center mb-4">
        {pokemon.name}
      </h1>
      <p className="text-center mb-4">
        No.{pokemonId.toString().padStart(4, "0")}
      </p>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-40 h-40 mx-auto mb-4"
      />
      <div className="text-center">
        <p className="mb-2">Height: {pokemon.height / 10} m</p>
        <p className="mb-2">Weight: {pokemon.weight / 10} kg</p>
        <div className="mb-2">
          Types:{" "}
          <span className="font-semibold">
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
