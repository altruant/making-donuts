import React from 'react'
import Cookies from 'js-cookie'


class RecipeInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe_name: '',
      image_url: '',
      is_public: false,
      recipe_type: '',
      prep_time: '',
      cook_time: '',
      cook_temp: '',
      temp_format: 'F',
      amount: '',
      serving: '',
      ingredients: '',
      instructions: '',
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChecked=this.handleChecked.bind(this)

  }

  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleChecked(event) {
    this.setState({[event.target.name]: !this.state.is_public})

  }


  async handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('/recipes/', {
      method: 'POST',
      headers: {
        // 'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    // Cookies.set('Authorization', `Token ${data.key}`
  }

  render() {
    let isDrink
    let imgSrc
    if(this.state.image_url){
      imgSrc = this.state.image_url
    } else {
      imgSrc = 'https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png'
    }
    if(this.state.recipe_type === 'DR') {
      isDrink = <input className='form-control col-5' type="text" name='cook_temp' value={this.state.cook_temp} onChange={this.handleInput} placeholder='Serving Temp'/>
    } else {
      isDrink = <>
      <input className='form-control col-6 col-md-3 mb-2 mb-md-0' type="text" name='cook_time' value={this.state.cook_time} onChange={this.handleInput} placeholder='Cook Time'/>
      <input className='form-control col-6 col-md-3' type="text" name='cook_temp' value={this.state.cook_temp} onChange={this.handleInput} placeholder='Cook Temp'/>
    </>
    }
    return(
      <React.Fragment>
        <div className="container">
          <div className="img-container mb-4">
            <img src={imgSrc} alt="#" style={{width: '100%'}}/>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="form-group d-md-flex">
                <input className='form-control col-12 col-md-6' type="text" name='recipe_name' value={this.state.recipe_name} onChange={this.handleInput} placeholder='Recipe Name' required/>
                <div className="col-12 pt-2 pl-0 pr-0  pt-md-0 pl-md-2 pr-md-2">
                  <input className='form-control col-12 col-md-6' type="text" name='by' placeholder='By' required/>
                </div>
              </div>
              <div className="form-group">
                <input className='form-control' type="url" name='image_url' value={this.state.image_url} onChange={this.handleInput} placeholder='Image URL'/>
              </div>
              <div className="form-group d-flex">
                <div className="checkbox col-4 d-flex">
                  <input className='col-2 form-control' type="checkbox" name='is_public' onChange={this.handleChecked}/>
                  <label className='pt-2 col d-flex' style={{whiteSpace: 'nowrap'}} htmlFor="is_public">Public Recipe</label>
                </div>
                <select className='form-control col-8' name="recipe_type" onChange={this.handleInput} required>
                  <option value="">Recipe Type</option>
                  <option value="BR">Breakfast</option>
                  <option value="BMS">Breads, Muffins, and Scones</option>
                  <option value="LN">Lunch</option>
                  <option value="DR">Drinks</option>
                  <option value="DIN">Dinner</option>
                  <option value="SD">Sides</option>
                  <option value="DST">Dessert</option>
                </select>
              </div>
            </div>
            <div className="form-group d-flex" style={{columnGap: '15px', flexWrap: 'wrap'}}>
              <input className='form-control col-6 col-md-3 mb-2 mb-md-0' type="text" name='prep_time' value={this.state.prep_time} onChange={this.handleInput} placeholder='Prep Time'/>
              {isDrink}
              <select className='form-control col-3 col-md-2' name="temp_format" onChange={this.handleInput}>
                <option value="F">°F</option>
                <option value="C">°C</option>
              </select>
            </div>
            <div className="form-group d-flex">
              <span className='pt-2 col-3'>This recipe makes:</span>
              <input className='form-control col-4 col-md-2' type="text" name='amount' value={this.state.amount} onChange={this.handleInput} placeholder='Amount'/>
              <input className='form-control col-4 col-md-3 ml-2' type="text" name='serving' value={this.state.serving} onChange={this.handleInput} placeholder='Cookies, meals, etc.'/>
            </div>
            <div className="form-group">
              <textarea className='form-control col-12 mb-3' name="ingredients" value={this.state.ingredients} onChange={this.handleInput} placeholder='Ingredients' cols="30" rows="6"></textarea>
              <textarea className='form-control col-12 mb-4' name="instructions" value={this.state.instructions} onChange={this.handleInput} placeholder='Instructions' cols="30" rows="6"></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Save</button>
          </form>
        </div>
        {/* <h2>Recipes.</h2> */}
      </React.Fragment>
    );
  }
}

export default RecipeInfo
