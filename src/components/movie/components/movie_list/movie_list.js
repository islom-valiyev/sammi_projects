import './movie_list.css'
import MovieListItem from '../movie_list_item/movie_list_item'

const MovieList = ({ data ,onDelate, onTogleProp}) => {
  return (
    <ul className='movie_list'>
      {/* bunda biz map orqali hamma datalarni olyabmiz */}
      {
        data.map(item => (
          <MovieListItem key={item.id} name={item.name} like={item.like} viewers={item.viewers} favourite={item.favourite} onDelate ={()=> onDelate(item.id)} onTogleProp={(e)=>onTogleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} />
        ))
      }
    </ul>
  )
}

export default MovieList