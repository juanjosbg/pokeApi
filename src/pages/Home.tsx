import CardsPokemon from '../components/cards';
import PokemonDetail from "../components/PokemonDetails";

function Home() {
  return (
    <section>
      <div className="min-h-screen flex">
        <aside className="w-1/4 bg-[#156c5f] p-4">
          <header>
            <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
              <h2 className="text-2xl tracking-tight text-white uppercase font-bold ml-4">
                Api Pokemon
              </h2>
            </div>
          </header>

          <div className="mb-6">
            <form className="flex items-center max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="simple-search" className="sr-only">Search or filter Results</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  placeholder="Search characters..."
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                />
              </div>
            </form>
          </div>

          <hr />
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mt-3 h-auto mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Pokemones Favoritos
            </label>
          </div>

          <hr />

          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 mt-3 h-auto mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Starred Characters
            </label>
            <br />
            <div className="container mx-auto flex flex-col">
              <CardsPokemon/>
            </div>
          </div>
        </aside>

        <main className="w-3/4 bg-[#e1e1e1]">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PokemonDetail/>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Home
