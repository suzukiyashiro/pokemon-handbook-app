import Link from "next/link";

export default function Home() {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <Link href="/1">
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="フシギダネ"
            className="w-40 h-40"
          />
          <p className="mt-2 text-sm font-semibold capitalize">フシギダネ</p>
        </div>
      </Link>
      <Link href="/1">
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="フシギダネ"
            className="w-40 h-40"
          />
          <p className="mt-2 text-sm font-semibold capitalize">フシギダネ</p>
        </div>
      </Link>
      <Link href="/1">
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="フシギダネ"
            className="w-40 h-40"
          />
          <p className="mt-2 text-sm font-semibold capitalize">フシギダネ</p>
        </div>
      </Link>
      <Link href="/1">
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt="フシギダネ"
            className="w-40 h-40"
          />
          <p className="mt-2 text-sm font-semibold capitalize">フシギダネ</p>
        </div>
      </Link>
    </div>
  );
}
