import './movie_list_item.css'
import { Component } from 'react'
class MovieListItem extends Component {
    constructor(props) {
        super(props)
        this.state = { favourite: false ,like:false}
    }

    onFavourite=()=>{
        this.setState(({favourite})=>({
            favourite: !favourite,
        }))
        console.log("dd");
    }
    onLike=()=>{
        this.setState(({like})=>({
            like:!like,
        }))
    }
    render() {
        const props = this.props
        const { favourite,like } = this.state
        return (
            <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like  && 'like'}`}>
                <span className='list-group-item-label'like onClick={this.onLike}> {props.name}</span>
                <input type="number" className='list-group-item-input' defaultValue={props.viewers} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-cookie btn-sm' onClick={this.onFavourite}>
                        <i className='fas fa-cookie'></i>
                    </button>
                    <button type='button' className='btn-trash btn-sm'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <i className='fas fa-star'></i>
                </div>
            </li>
        )
    }
}

// function

// const MovieListItem = (props) => {
//     ///////////////////////////////////////////////////// {/* bu favourete classnisi qushish yullari bu ikkinichi yuli bunda biz */}////////////////////////////////
//     let className = 'list-group-item d-flex justify-content-between'
//     if (props.favourete) {
//         className += " favourete"
//     }

//     return (
//         // <li className={`list-group-item d-flex justify-content-between ${props.favourete && 'favourete' }`}>      { bu favourete classnisi qushish yullari bu birinchi yul}
//         <li className={className}>
//             <span className='list-group-item-label'> {props.name}</span>
//             <input type="number" className='list-group-item-input' defaultValue={props.viewers} />
//             <div className='d-flex justify-content-center align-items-center'>
//                 <button type='button' className='btn-cookie btn-sm'>
//                     <i className='fas fa-cookie'></i>
//                 </button>
//                 <button type='button' className='btn-trash btn-sm'>
//                     <i className='fas fa-trash'></i>
//                 </button>
//                 <i className='fas fa-star'></i>
//             </div>
//         </li>
//     )
// }

export default MovieListItem
