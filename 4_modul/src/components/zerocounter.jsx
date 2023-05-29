import { useDispatch } from "react-redux"
import { zeroCounter } from "./reducers/countSlice"
const MinusCounter = ({ }) => {
	const dispatch = useDispatch()
	return (
		<button onClick={() => dispatch(zeroCounter())}> zero</button>
	)
}
export default MinusCounter