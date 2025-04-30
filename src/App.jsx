import { Col } from 'antd'
import './App.css'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import Logo from './assets/logo.svg'
import { useState, useEffect } from 'react'
import { getPokemons } from './api'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons()
      setPokemons(data)
    }
    fetchPokemons()
  }, [])
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
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
