import './movies_add_form.css'
import { Component } from 'react'
class moviesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      views:""
    }
  }

  changeHandele = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addFormHandle = e => {
    e.preventDefault()
    this.props.addForm({ name: this.state.name, viewers:this.state.views, })
    this.setState({
      name: '',
      views: ''
    })
  }

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

export default moviesAddForm
