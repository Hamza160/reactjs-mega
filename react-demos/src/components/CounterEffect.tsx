import { useEffect, useState } from "react"

const CounterEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title =   `This is count ${count}`
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        </div>
    )
}

export default CounterEffect