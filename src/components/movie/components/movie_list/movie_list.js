import './movie_list.css'
import MovieListItem from '../movie_list_item/movie_list_item'

const MovieList = ({ data }) => {
  return (
    <ul className='movie_list'>
      {/* bunda biz map orqali hamma datalarni olyabmiz */}
      {
        data.map(item => (
          <MovieListItem key={item.id} name={item.name} viewers={item.viewers} favourite={item.favourite} onDelate ={()=> console.log("hello")}/>
        ))
      }
    </ul>
  )
}

export default MovieList
