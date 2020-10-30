import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
        } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    }
  }
  async componentDidMount() {
    const response = await fetch('/recipes/')
    const data = await response.json()
    this.setState({recipes: data})
  }
  render() {
    const recipeList = this.state.recipes.map((recipe, id) => {
      return (
        <>
          <Link to={`/recipes/${recipe.recipe_name}`}>
            <div key={id} className="img-container d-inline-flex mr-3" style={{position: 'relative', width: '200px', height: '200px', overflow: 'hidden'}}>
              <img src={recipe.image_url} style={{maxWidth:'100%', position: 'absolute', left: '50%', top:'50%', transform: 'translate(-50%,-50%)'}} alt="#"/>
            </div>
          </Link>
        </>
      )
    })
    return(
          <React.Fragment>
            <div className="container">
              <h2>Home.</h2>
              <h3>Your Recipes:</h3>
              {recipeList}
            </div>
          </React.Fragment>
      )
    }
  }


export default Home
