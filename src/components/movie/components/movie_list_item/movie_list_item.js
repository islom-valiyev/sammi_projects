import './movie_list_item.css'
const MovieListItem = (props) => {
    return (
        <li className={`list-group-item d-flex justify-content-between ${props.favourite && 'favourite'} ${props.like && 'like'}`}>
            <span className='list-group-item-label' onClick={props.onTogleProp} data-toggle="like"> {props.name}</span>
            <input type="number" className='list-group-item-input' defaultValue={props.viewers} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-cookie btn-sm' onClick={props.onTogleProp} data-toggle="favourite">
                    <i className='fas fa-cookie'></i>
                </button>
                <button type='button' className='btn-trash btn-sm' onClick={props.onDelate}>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
        </li>
    ) 
}


export default MovieListItem

//////////////////// class way

// import './movie_list_item.css'
// import { Component } from 'react'

// class MovieListItem extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       favourite: false,
//       like: false
//     }
//   }

//   render() {
//     const props = this.props
//     return (
//       <li className={`list-group-item d-flex justify-content-between ${props.favourite && 'favourite'} ${props.like && 'like'}`}>
//         <span className='list-group-item-label' onClick={props.onTogleProp} data-toggle="like">
//           {props.name}
//         </span>
//         <input type="number" className='list-group-item-input' defaultValue={props.viewers} />
//         <div className='d-flex justify-content-center align-items-center'>
//           <button type='button' className='btn-cookie btn-sm' onClick={props.onTogleProp} data-toggle="favourite">
//             <i className='fas fa-cookie'></i>
//           </button>
//           <button type='button' className='btn-trash btn-sm' onClick={props.onDelate}>
//             <i className='fas fa-trash'></i>
//           </button>
//           <i className='fas fa-star'></i>
//         </div>
//       </li>
//     )
//   }
// }

// export default MovieListItem