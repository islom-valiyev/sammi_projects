import { Component } from "react"
import { v4 as uuidv4 } from 'uuid';
import AppInfo from "../app_info/App_info"
import SearchPanel from "../search_panel/search_panel"
import AppFilter from "../app_filter/app_filter"
import MovieList from '../movie_list/movie_list'
import MoviesAddForm from '../movies_add_form/movies_add_form'
import './App.css'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "Avanger", viewers: '800', favourite: false, id: 1, like: false },
                { name: "Breaking bad", viewers: '600', favourite: true, id: 2, like: true },
                { name: "Spider man", viewers: '545', favourite: false, id: 3, like: false },
                { name: "John ", viewers: '785', id: 4, like: false, favourite: true },
            ]
        }
    }

    onDelete = (id) => {
        this.setState(({ data }) => {
            const newArray = data.filter(c => c.id !== id);
            console.log(newArray);
            return { data: data.filter(c => c.id !== id) };
        });
    };

    addForm = item => {
        const newItem = { name: item.name, viewers: this.viewers, id: uuidv4(), like: false, favourite: false }
        this.setState(({ data }) => ({
            data: [...data, { ...newItem, }],
        }))
    }

    onTogleFavourite = id => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, favourite: !item.favourite }
                }
                return item
            }, console.log(data))
        }))
    }

    //onDelete = (id) => {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(c => c.id === id); // id ga mos keluvchi element indeksi
    //         console.log(data);
    //         if (index === -1) { // agar element topilmagan bo'lsa
    //             return { data }; // hech nima qilmaslik
    //         }
    //         data.splice(index, 1); // topilgan indeksdagi elementni o'chirish
    //         return { data };
    //     });
    // };


    render() {
        const { data } = this.state
        return (
            <div className="app font-monospace">
                <div className="content">
                    <AppInfo />
                    <div className='cearch_panel'>
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelate={this.onDelete} onTogleFavourite={this.onTogleFavourite} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        )
    }
}


export default App
