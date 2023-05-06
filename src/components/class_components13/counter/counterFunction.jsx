import './counter_new.css'

import { useState } from 'react'
const CounterFunction = () => {

    const [counter, setCount] = useState(0)
    const [islogin , setIsLogin] = useState(true)

    const handleClickIncrease = () => {
        setCount(pervState => pervState + 1)
    }

    const handleClickDecrease = () => {
        setCount(pervState => pervState - 1)
    }

    const handleClickZero = () => {
        setCount(0)
    }
    const onTogleLoading = () => {
        setIsLogin(prevState => !prevState)
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
            <div>
                {islogin? <p className='text-center mt-3' >Login</p> :null}
                <div className="d-flex justify-content-center">
                <button className='btn btn-primary ' onClick = {onTogleLoading}> TOGGLE </button>
                </div>
            </div>

        </div>
    )
}

export default CounterFunction
