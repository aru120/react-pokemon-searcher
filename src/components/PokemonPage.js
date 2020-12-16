import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemon: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r=>r.json())
    .then(data=> this.setState({pokemon: data}))
  }

  handleFormSubmit = (pokemonObj) =>{
     let pokeObj ={
          name: pokemonObj.name,
          hp: pokemonObj.hp,
          sprites:{
            front: pokemonObj.frontUrl,
            back: pokemonObj.backUrl
          }
      }



    fetch('http://localhost:3000/pokemon', {
  method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokeObj),
    })
    .then(response => response.json())
    .then(data => {
      this.setState({pokemon: [data,...this.state.pokemon]});
    })

}




  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleFormSubmit={this.handleFormSubmit}/>
        <br />
        <PokemonCollection api={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
