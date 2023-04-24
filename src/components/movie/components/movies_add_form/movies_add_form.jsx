import './movies_add_form.css'
import { Component } from 'react'

// Create a new component called moviesAddForm which extends the Component class
class moviesAddForm extends Component {
  // Constructor function which initializes the component's state
  constructor(props) {
    super(props)
    // Set the component's initial state to an object with two properties: 'name' with an empty string as its value, and 'views' with an empty string as its value
    this.state = {
      name: "",
      views: ""
    }
  }

  // Function which is called whenever the value of an input field is changed
  changeHandele = (e) => {
    // Update the component's state to include the new value of the input field, using the input field's 'name' attribute as the key
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Function which is called when the form is submitted
  addFormHandle = e => {
    e.preventDefault()
    // Call the parent component's addForm function and pass it an object with the 'name' and 'views' properties set to the current values of the component's state
    this.props.addForm({ name: this.state.name, viewers:this.state.views, })
    // Reset the component's state to its initial values
    this.setState({
      name: '',
      views: ''
    })
  }

  // Render function which generates the component's HTML
  render() {
    const { name, views } = this.state
    return (
      <div className='movies-add-form'>
        <h3>Yangi kino qushish</h3>
        <form className='add-form d-flex' onSubmit={this.addFormHandle}>
          <input type="text" className='form-control new-post-label' placeholder='Qanday kino' onChange={this.changeHandele} name='name' value={name} />
          <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba kurilgan' onChange={this.changeHandele} name='views' value={views} />
          <button type="submit" className='btn btn-outline-dark'>
            Qushish
          </button>
        </form>
      </div>
    )
  }
}

// Export the moviesAddForm component as the default export of this module
export default moviesAddForm

// const moviesAddForm = () => {
//   return (
//     <div className='movies-add-form'>
//       <h3>Yangi kino qushish</h3>
//       <form className='add-form d-flex'>
//         <input type="text" className='form-control new-post-label' placeholder='Qanday kino' />
//         <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba kurilgan'  />
//         <button type="submit" className='btn btn-outline-dark'>
//             Qushish
//         </button>
//       </form> 
//     </div>
//   )
// }

// export default moviesAddForm
