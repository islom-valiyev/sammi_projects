import './app_info.css'
const AppInfo = ({allMoviesCount ,favoriteMoviesCount}) => {
  return (
    <div className="app_info">
        console.log(size);
        <p className='fs-3 text-uppercase'> Barcha kinolar soni: {allMoviesCount}</p>
        <p className='fs-4 text-uppercase'> Sevimli kinolar soni:{favoriteMoviesCount} </p>

    </div>
  )  
}

export default AppInfo
