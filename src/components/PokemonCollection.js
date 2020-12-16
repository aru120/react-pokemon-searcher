import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'
import Search from './Search'

class PokemonCollection extends React.Component {

  state={
    searchTerm: ""
  }



  renderPokemon = () => {
    let filteredArray = this.props.api.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredArray.map(pokemonObj => <PokemonCard key={pokemonObj.id} pokemonObj={pokemonObj} /> )
  }

searchHandler = e =>{
  this.setState({searchTerm: e.target.value})
}

  render() {
    return (
      <Card.Group itemsPerRow={6}>
          <Search value={this.state.searchTerm} searchHandler={this.searchHandler}/>
          <br />
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
