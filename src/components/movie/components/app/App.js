import { Component } from "react"
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
                { name: "Avanger", viewers: '800', favourete: false, id: 1 },
                { name: "Breaking bad", viewers: '600', favourete: true, id: 2 },
                { name: "Spider man", viewers: '545', favourete: false, id: 3 },
                { name: "John ", viewers: '785', favourete: true, id: 4 },
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
        this.setState(({ data }) =>( {
            data: [...data, { ...item }],
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
                    <MovieList data={data} onDelate={this.onDelete} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        )
    }
}


export default App


// /// function

// const App = () => {
//     const data = [
//         { name: "Avanger", viewers: '800', favourete: false, id: 1 },
//         { name: "Breaking bad", viewers: '600', favourete: true, id: 2 },
//         { name: "Spider man", viewers: '545', favourete: false, id: 3 },
//         { name: "John ", viewers: '785', favourete: true, id: 4 }

//     ]
//     const onDelate = (id) => {
//         console.log(id);
//     }

//     return (
//         <div className="app font-monospace">
//             <div className="content">
//                 <AppInfo />
//                 <div className='cearch_panel'>
//                     <SearchPanel />
//                     <AppFilter />
//                 </div>
//                 <MovieList data={data} onDelate={onDelate} />
//                 <MoviesAddForm />
//             </div>
//         </div>
//     )
// }