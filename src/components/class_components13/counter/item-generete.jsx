import { useState, useEffect } from 'react'

const CounterItem = ({ counterGenerate }) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const newItem = counterGenerate();
        setItem(newItem);
        console.log('re');
    }, [counterGenerate]);

    return (
        <ul>
            {item.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </ul>
    );
};

export default CounterItem;
