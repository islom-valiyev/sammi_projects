import { useDispatch } from "react-redux"
import { minusCounter } from "./reducers/countSlice"
const MinusCounter = ({})=>{
const dispatch = useDispatch()
return(
	<button onClick={()=>dispatch(minusCounter())}> minus</button>
)
}
export default  MinusCounter