export default function PokemonCard({ pokemon }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name}
        className="w-full h-48 object-contain"
      />

      <h2 className="text-xl font-bold capitalize mt-2">
        {pokemon.name}
      </h2>

      <p className="text-gray-600">#{pokemon.id}</p>

      <div className="mt-2">
        {pokemon.types.map((type) => (
          <span 
            key={type.type.name}
            className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2"
          >
            {type.type.name}
          </span>
        ))}
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-sm mb-1">Moves</h3>
        <div className="flex flex-wrap gap-2">
          {pokemon.moves.slice(0, 6).map((m) => (
            <span
              key={m.move.name}
              className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs capitalize"
            >
              {m.move.name.replace("-", " ")}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  )
}
