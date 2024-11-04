import apiClient from "./apiClient";

export const getPokemons = async (offset: number, limit: number) => {
  const res = await apiClient.get(`?offset=${offset}&limit=${limit}`);
  return res.data.results;
};

export const getPokemon = async (pokemonId: string) => {
  const res = await apiClient.get(`/${pokemonId}`);
  return res.data;
};
