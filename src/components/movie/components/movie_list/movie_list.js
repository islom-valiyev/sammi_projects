import './movie_list.css'
import MovieListItem from '../movie_list_item/movie_list_item'

const MovieList = ({data}) => {
  return (
    <ul className='movie_list'>
 {/* bunda biz map orqali hamma datalarni olyabmiz */}
      {
        data.map(item=>(
      <MovieListItem name = {item.name} viewers = {item.viewers}  favourete ={item.favourete}/>
      // <MovieListItem{...item} /> bu ikkinichi yul

        ))
      }

    </ul>
  )
}

export default MovieList
