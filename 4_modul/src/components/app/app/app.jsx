import { useSelector } from "react-redux"
import Counter from '../../counter'


function App() {
	const state = useSelector(state => state.count)
	console.log(state);
	return (
		<div>
			<h1>counter:{state}</h1>
			<Counter/>
		</div>
	)
}
export default App