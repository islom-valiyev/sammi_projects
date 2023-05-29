import { useDispatch } from "react-redux"
import { plusCounter } from "./reducers/countSlice"
const Addcounter = ({})=>{
const dispatch = useDispatch()
return(
	<button onClick={()=>dispatch(plusCounter())}> +	</button>
)
}
export default  Addcounter