import './App.css'
import AppInfo from "../app_info/App_info"
import SearchPanel from "../search_panel/search_panel"
import AppFilter from "../app_filter/app_filter"
import MovieList from '../movie_list/movie_list'
import MoviesAddForm from '../movies_add_form/movies_add_form'
const App = () => {
    const data =[
        {name :"Avanger", viewers : '800', favourete :false},
        {name :"Breaking bad", viewers : '600', favourete :true},
        {name :"Spider man", viewers : '545', favourete :false},
        {name :"John ", viewers : '785', favourete :true}

    ]

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo />
                <div className='cearch_panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <MovieList data ={data}/>
                <MoviesAddForm/>
            </div>
        </div>
    )
}
export default App  