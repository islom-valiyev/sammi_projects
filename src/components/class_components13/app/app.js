// import CounterNew from '../counter/counter_new'
import { useState } from 'react'
import CounterFunction from '../counter/counterFunction'


const App = () => {
    const [isDisplay, setISDisplay] = useState(true)

    const delateHandele = () => {
        setISDisplay(false)
    }
    return (
        <div>
            {/* <User firstname='islom' lastname = 'valiev' link= 'youtube.com' /> */}
            {/* <CounterNew/> */}
            <button onClick={delateHandele}>delate</button>
            {isDisplay && <CounterFunction />}
            {/* <Counter/>
            <Counter/> */}
        </div>
    )
}

export default App
