const PokemonDetailPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold capitalize text-center mb-4">
        フシギダネ
      </h1>
      <p className="text-center mb-4">No.0001</p>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="フシギダネ"
        className="w-40 h-40 mx-auto mb-4"
      />
      <div className="text-center">
        <p className="mb-2">Height: 0.7 m</p>
        <p className="mb-2">Weight: 6.9 kg</p>
        <div className="mb-2">
          <span>Types:</span>
          <span className="font-semibold">grass, poison</span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
