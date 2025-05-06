import { Col } from 'antd'
import { useEffect, useState, useMemo } from 'react'
import './App.css'
import { useGetPokemonsQuery } from './redux/pokemonsApi';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonList } from './components/PokemonList'
import { Searcher } from './components/Searcher'
import Logo from './assets/logo.svg'
import { setPokemons, filteredPokemons } from './redux/pokemonsSlice';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
function App() {
  const [page, setPage] = useState(1); // State for the current page
  const limit = 15; // Number of Pokémon per page
  const { data, isLoading, isError } = useGetPokemonsQuery(limit); // Fetch Pokémon data with pagination
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchTerm); // Get the search term from the Redux store
  const filterPokemons = useSelector((state) => state.pokemons.filteredPokemons);
  const paginatedPokemons = useMemo(() => {
    return filterPokemons.slice((page - 1) * limit, page * limit);
  }, [filterPokemons, page, limit]);
  useEffect(() => {
    if (data && !isLoading && !isError) {
      dispatch(setPokemons(data.results)) // Dispatch the fetched Pokémon data to the Redux store
      dispatch(
        filteredPokemons(searchText) // Filter Pokémon based on the search term
      );
      setPage(1);} // Reset the page to 1 when the Pokémon list changes
      }, [data, isLoading, isError, searchText, dispatch]); // Add the dependencies to the useEffect hook

  // Paginate the filtered Pokémon
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
        <h1>Find your favorite Pokémon</h1>
        <Searcher />
      </Col>
      {
        isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <PokemonList data={paginatedPokemons} isLoading={isLoading} isError={isError}/>
        )
      }
      {
        paginatedPokemons.length <= 15 && (
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
