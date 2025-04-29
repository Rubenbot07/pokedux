import { Col } from 'antd'
import './App.css'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'

function App() {

  return (
    <div className="App">
      <Col span={16} offset={4} style={{ textAlign: 'center', minWidth: '300px', margin: '0 auto', width: '100%' }} className="header">
        <h1>Pokedux</h1>
        <h2>Find your favorite Pokémon</h2>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  )
}

export default App
