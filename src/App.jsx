import { Col } from 'antd'
import { useEffect, useState } from 'react'
import './App.css'
import { useGetPokemonsQuery } from './redux/pokemonsApi';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import Logo from './assets/logo.svg'
import { setPokemons } from './redux/pokemonsSlice';

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); // State for the current page
  const limit = 15; // Number of Pokémon per page
  const { data, isLoading, isError } = useGetPokemonsQuery(limit); // Fetch Pokémon data with pagination
  const searchText = useSelector((state) => state.search.searchTerm); // Get the search term from the Redux store
  const filteredPokemons = useSelector((state) => state.pokemons.data); // Get the Pokémon list from the Redux store
  
  
  useEffect(() => {
    if (data && !isLoading && !isError) {
      const filterPokemons = data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
      console.log('Filtered Pokémon:', filterPokemons);
      dispatch(setPokemons(filterPokemons));
      setPage(1); // Reset the page to 1 when the Pokémon list changes
    }
  }, [data, isLoading, isError, searchText, dispatch]); // Add the dependencies to the useEffect hook

// Dispatch the filtered Pokémon to the Redux store
  // Paginate the filtered Pokémon
  const paginatedPokemons = filteredPokemons.slice((page - 1) * limit, page * limit);
  const handleNextPage = () => {
    if(page <= 10) setPage((prev) => prev + 1);
  } 
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
      <PokemonList data={paginatedPokemons} isLoading={isLoading} isError={isError}/>
      {
        filteredPokemons.length > 15 && (
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={page === 1}>Prev</button>
            <span>{page}</span>
            <button onClick={handleNextPage} disabled={page === 10}>Next</button>
          </div>
        )
      }
    </div>
  )
}

export default App
