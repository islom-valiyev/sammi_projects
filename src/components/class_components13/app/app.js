
import { Component } from 'react'
import Counter from "../counter/counter"
class User extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const{firstname,lastname,link} = this.props
        return (
            <div>
                <h1>my name is {firstname} </h1>
                <h2>my surname is {lastname}</h2>
                <a href={link}> {link}</a>
            </div>
        )
    }
}

const App = () => {
    return (
        <div>
            <User firstname='islom' lastname = 'valiev' link= 'youtube.com' />
            <Counter/>
            <Counter/>

        </div>
    )
}

export default App
