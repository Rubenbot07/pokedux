import { Col } from 'antd'
import { useState } from 'react'
import './App.css'
import { useGetPokemonsQuery } from './redux/pokemonsApi';
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import Logo from './assets/logo.svg'

function App() {
  const [page, setPage] = useState(1); // State for the current page
  const limit = 15; // Number of Pokémon per page
  const offset = (page - 1) * limit; // Calculate the offset based on the current page
  const { data, isLoading, isError } = useGetPokemonsQuery({ limit, offset }); // Fetch Pokémon data with pagination
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error loading Pokémon</h1>;
  }

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => {
    // We use Math.max to ensure that the page does not go below 1.
    // This prevents the user from going back past the first page.
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="App">
      <Col span={4} offset={1} style={{ textAlign: 'center', minWidth: '300px', margin: '0 auto', width: '100%' }}>
        <img src={Logo} alt="logo" className="Pokedux" style={{ width: '100%' }} />
      </Col>
      <Col span={16} offset={4} style={{ textAlign: 'center', minWidth: '300px', margin: '0 auto', width: '100%' }}>
        <h1>Pokedux</h1>
        <h2>Find your favorite Pokémon</h2>
        <Searcher />
      </Col>
      <PokemonList data={data.results} isLoading={isLoading} isError={isError}/>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
        <span>{page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  )
}

export default App
