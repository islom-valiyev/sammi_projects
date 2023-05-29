import Addcounter from './Addcounter'
import MinusCounter from './minuscounter'
import ZeroCounter from './zerocounter'
const Counter = () => {
	return (
		<div>
			<Addcounter />,
			<MinusCounter />,
			<ZeroCounter />
		</div>
	)
}
export default Counter