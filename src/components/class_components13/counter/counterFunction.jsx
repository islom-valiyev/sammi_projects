import './counter_new.css'

import { useState } from 'react'
const CounterFunction = () => {

    const [counter, setCount] = useState(0)

    const handleClickIncrease = () => {
        setCount(counter + 1)

}

const handleClickDecrease =() => {
    setCount(counter -1)

}

const handleClickZero = () => {
    setCount(0)

}


return (
    <div className="wrapper w-50 mx-auto mb-5" >
        <h2 className="title">Counter</h2>
        <div className="counterContainer">
            <button className="btn btn-success mx-3" onClick={handleClickIncrease}>Increase</button>
            <button className="btn btn-danger mx-3" onClick={handleClickDecrease}>Decrease</button>
            <button className="btn btn-success mx-3" onClick={handleClickZero}>Restart</button>

            <p className="counter ">{counter}</p>
        </div>
    </div>
)
}

export default CounterFunction
