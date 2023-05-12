// Import necessary modules and components
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AppInfo from "../app_info/App_info";
import SearchPanel from "../search_panel/search_panel";
import AppFilter from "../app_filter/app_filter";
import MovieList from '../movie_list/movie_list';
import MoviesAddForm from '../movies_add_form/movies_add_form';
import './App.css';


const App = () => {
    const [data, setData] = useState([
        { name: "Avenger", viewers: '800', favourite: false, id: 1, like: false },
        { name: "Breaking Bad", viewers: '600', favourite: false, id: 2, like: false },
        { name: "Spider-Man", viewers: '545', favourite: false, id: 3, like: true },
        { name: "John", viewers: '785', id: 4, like: false, favourite: false },
    ])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')

    const onDelete = id => {
        const newArr = data.filter(c => c.id !== id);
        // console.log(newArr)
        setData(newArr)
    }

    const addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), like: false, favourite: false };
        const newArr = [...data, newItem]
        setData(newArr)
    }

    const onToggleProp = (id, prop) => {
        const newArr = data.map(item => {
            if (item.id === id) {
                // Toggle the specified property for the movie object with the matching ID
                return { ...item, [prop]: !item[prop] }
            }
            // Return the original movie object if it doesn't match the ID
            return item
        })
        setData(newArr)
    }

    const searchHandle = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }
        const lowerCaseTerm = term.toLowerCase();
        return arr.filter((item) => item.name.toLowerCase().indexOf(lowerCaseTerm) > -1);
    }

    const filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostviewers':
                return arr.filter(c => c.viewers > 700)
            default:
                return arr
        }
    }

    const updateFilterHandler = (filter) => setFilter(filter)

    const updateTermHandler = (term) => setTerm(term)

    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo allMoviesCount={data.length} favoriteMoviesCount={data.filter(c => c.favourite === true).length} />
                <div className='search_panel'>
                    <SearchPanel updateTermHandler={updateTermHandler} />
                    <AppFilter updateFilterHandler={updateFilterHandler} />
                </div>
                <MovieList data={filterHandler(searchHandle(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
                <MoviesAddForm addForm={addForm} />
            </div>
        </div>
    )
}

export default App;
