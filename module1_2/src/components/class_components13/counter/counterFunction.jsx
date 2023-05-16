import { useState, useCallback } from 'react'
import './counter_new.css'
import CounterItem from './item-generete'

const CounterFunction = () => {
    const [counter, setCount] = useState(0)
    const [active, setActive] = useState(false)

    const handleClickIncrease = () => {
        setCount(prevState => prevState + 1)
    }
    const onToggle = () => {
        setActive(prevState => !prevState)
    }

    const counterGenerate = useCallback(() => {
        return new Array(counter).fill(" ").map((_, idx) => ` ${idx=== 0 ?idx+1 : idx} counter number ${idx}`)
    },[counter])

    const color = {
        color: active ? 'blue' : 'red'
    }

    return (
        <div className="wrapper w-50 mx-auto mb-5">
            <h2 className="title">Counter</h2>
            <div className="counterContainer">
                <button className="btn btn-success mx-3" onClick={handleClickIncrease}>Increase</button>
                <button className="btn btn-danger mx-3" onClick={onToggle}>Toggle</button>
                <p className="counter" style={color}>{counter}</p>
            </div>
            <CounterItem counterGenerate={counterGenerate} />
        </div>
    )
}

export default CounterFunction
