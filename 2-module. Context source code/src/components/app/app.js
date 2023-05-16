import { useState, useEffect, useContext } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { Context } from '../../context'

import './app.css'

const App = () => {
	const [isLoading, setIsLoading] = useState(false)

	const { _, dispatch } = useContext(Context)

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => ({
					name: item.title,
					id: item.id,
					viewers: Math.floor(Math.random() * (900 - 133 + 1)) + 133,
					favourite:  Math.random() < 0.5,
					like: Math.random() < 0.5,
				}))
				dispatch({ type: 'GET_DATA', payload: newArr })
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				{isLoading && 'Loading..'}
				<MovieList />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App
