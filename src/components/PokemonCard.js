import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    flipped: false
  }

  clickHandler=()=>{
    this.setState(prevState => ({flipped: !prevState.flipped}))
  }

  render() {
    return (
      <Card>
        <div onClick={this.clickHandler}>
          <div className="image">
            <img alt="oh no!" src={this.state.flipped ? this.props.pokemonObj.sprites.back : this.props.pokemonObj.sprites.front } />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard


