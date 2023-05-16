import './movie_list.css'
import MovieListItem from '../movie_list_item/movie_list_item'

const MovieList = ({ data ,onDelete, onToggleProp}) => {
  return (
    <ul className='movie_list'>
      {/* bunda biz map orqali hamma datalarni olyabmiz */}
      {
        data.map(item => (
          <MovieListItem key={item.id} {...item} onDelete ={()=> onDelete(item.id)} onTogleProp={(e)=>onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} />
        ))
      }
    </ul>
  )
}


export default MovieList