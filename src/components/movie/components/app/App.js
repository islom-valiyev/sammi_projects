// Import necessary modules and components
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import AppInfo from "../app_info/App_info";
import SearchPanel from "../search_panel/search_panel";
import AppFilter from "../app_filter/app_filter";
import MovieList from '../movie_list/movie_list';
import MoviesAddForm from '../movies_add_form/movies_add_form';
import './App.css';

// Define the main App component
class App extends Component {
    constructor(props) {
        super(props);
        // Initialize the state with an array of movie objects
        this.state = {
            data: [
                { name: "Avenger", viewers: '800', favourite: false, id: 1, like: false },
                { name: "Breaking Bad", viewers: '600', favourite: false, id: 2, like: false },
                { name: "Spider-Man", viewers: '545', favourite: false, id: 3, like: true },
                { name: "John", viewers: '785', id: 4, like: false, favourite: false },
            ],
            term: '',
            filter: 'all',
        };
    }

    // Handle delete events by removing the movie with the corresponding ID from the state
    onDelete = (id) => {
        this.setState(({ data }) => {
            // Create a new array with all elements except the one with the matching ID
            const newArray = data.filter(c => c.id !== id);
            console.log(newArray);
            // Update the state with the new array
            return { data: data.filter(c => c.id !== id) };
        });
    };

    // Handle adding new movies by creating a new movie object with a unique ID using uuidv4
    addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), like: false, favourite: false };
        // Add the new movie object to the existing array of movies in the state
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    }

    // Handle toggling properties (like and favourite) for a given movie object in the state
    onTogleProp = (id, prop) => {
        console.log(prop);
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    // Toggle the specified property for the movie object with the matching ID
                    return { ...item, [prop]: !item[prop] }
                }
                // Return the original movie object if it doesn't match the ID
                return item
            })
        }))
    }

    searchHandle = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }
        const lowerCaseTerm = term.toLowerCase();
        return arr.filter((item) => item.name.toLowerCase().indexOf(lowerCaseTerm) > -1);
    };

    UpdateTermHandler = (term) => {
        this.setState({ term })
    }

    filterHandler = (arr, filter) => {
        switch (filter) {
            case 'popular':
                return arr.filter(c => c.like)
            case 'mostviewers':
                return arr.filter(c => c.viewers > 700)
            default:
                return arr
        }
    }

    UpdateFilterHandler = (filter) => {
        this.setState({ filter });
        console.log(filter);
      }
      

    // Render the main App component
    render() {
        const { data, term, filter } = this.state
        const allMoviesCount = data.length
        const favoriteMoviesCount = data.filter(c => c.favourite === true).length
        const visibleData = this.filterHandler(this.searchHandle(data, term), filter)
        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo allMoviesCount={allMoviesCount} favoriteMoviesCount={favoriteMoviesCount} />
                    <div className='cearch_panel'>
                        <SearchPanel UpdateTermHandler={this.UpdateTermHandler} />
                        <AppFilter  UpdateFilterHandler={this.UpdateFilterHandler} />
                    </div>
                    <MovieList data={visibleData} onDelate={this.onDelete} onTogleProp={this.onTogleProp} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        )
    }
}

export default App