import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    name:"",
    hp: "",
    frontUrl: "",
    backUrl: ""
  
  }


  localHandleSubmit =(e)=>{
    e.preventDefault()
    this.props.handleFormSubmit(this.state)
  }

  handleState = (e)=>{   
    this.setState({[e.target.name]: e.target.value})
  }

  

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localHandleSubmit} onChange={this.handleState} >
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}  />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
