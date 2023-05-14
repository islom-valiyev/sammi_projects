// Import necessary modules and components
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import AppInfo from "../app_info/App_info";
import SearchPanel from "../search_panel/search_panel";
import AppFilter from "../app_filter/app_filter";
import MovieList from '../movie_list/movie_list';
import MoviesAddForm from '../movies_add_form/movies_add_form';
import './App.css';


const App = () => {
    const [data, setData] = useState([])
    const [term, setTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const [isLoading, setIsLoading] = useState(false)

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

    useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=15')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => ({
					name: item.title,
					id: item.id,
					viewers: Math.floor(Math.random() * (900 - 133 + 1)) + 133,
					favourite:  Math.random() < 0.5,
					like: Math.random() < 0.5,
				}))
				setData(newArr)
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, [])


    return (
        <div className="app font-monospace">
            <div className="content">
                <AppInfo allMoviesCount={data.length} favoriteMoviesCount={data.filter(c => c.favourite === true).length} />
                <div className='search_panel'>
                    <SearchPanel updateTermHandler={updateTermHandler} />
                    <AppFilter updateFilterHandler={updateFilterHandler} />
                </div>
                {isLoading && 'Loading..'}
                <MovieList data={filterHandler(searchHandle(data, term), filter)} onDelete={onDelete} onToggleProp={onToggleProp} />
                <MoviesAddForm addForm={addForm} />
            </div>
        </div>
    )
}

export default App;
