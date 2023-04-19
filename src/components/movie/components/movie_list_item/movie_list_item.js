import './movie_list_item.css'

const MovieListItem = (props) => {
    ///////////////////////////////////////////////////// {/* bu favourete classnisi qushish yullari bu ikkinichi yuli bunda biz */}////////////////////////////////
    let className = 'list-group-item d-flex justify-content-between'
    if (props.favourete) {
        className += " favourete"
    }

    return (
        // <li className={`list-group-item d-flex justify-content-between ${props.favourete && 'favourete' }`}>      { bu favourete classnisi qushish yullari bu birinchi yul}
        <li className={className}>
            <span className='list-group-item-label'> {props.name}</span>
            <input type="number" className='list-group-item-input' defaultValue={props.viewers} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type='button' className='btn-cookie btn-sm'>
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

export default MovieListItem
