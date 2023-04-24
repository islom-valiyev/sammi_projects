import { Component } from 'react'
import './search_panel.css'
class SearchPanel extends Component{
  constructor(props){
    super(props)
    this.state ={
      term:'',
    }
  }
  UpdateTermHandler = e =>{
    const term = e.target.value
    this.setState({term})
    this.props.UpdateTermHandler(term)

  }

  render(){
    return(
    <input type="text" className="form-control search-input"  placeholder="kinolarni qidirish" onChange={this.UpdateTermHandler} value={this.state.term}/>
    )
  }
}
export default SearchPanel
