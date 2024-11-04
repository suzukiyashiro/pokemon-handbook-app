"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getPokemons } from "@/lib/actions";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      setOffset((prevOffset) => prevOffset + limit);
    }
  };

  const fetchPokemons = async () => {
    try {
      const _pokemons = await getPokemons(offset, limit);
      setPokemons((prev) => [...prev, ..._pokemons]);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {pokemons.map((pokemon, index) => {
        const pokemonId = pokemon.url.split("/").slice(-2, -1)[0];
        return (
          <Link href={`/${pokemonId}`} key={index}>
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={pokemon.name}
                className="w-40 h-40"
              />
              <p className="mt-2 text-sm font-semibold capitalize">
                {pokemon.name}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
