import { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useTimeout from "./useTimeout";
import useDebounce from "./useDebounce";
import useUpdateEffect from "./useUpdateEffect";

export function CustomUse() {
    const [name, setName] = useLocalStorage('name', '')
    const [count, setCount] = useState('start')
    const {clear, reset} = useTimeout(() => setCount('finish'), 5000)

    // useDebounce(() => alert(count), 1000, [count])

    useUpdateEffect(() => console.log('update now', count), [count])
    return (
        <>
            {/* <h1>custom localStorage example: </h1>
            <label>localStorage:</label><input value={name} onChange={e => setName(e.target.value)} /> */}
            <br />
            <label>timeout:</label><label>{count}</label>
            <button onClick={reset}>reset</button>
            <button onClick={() => {clear(); setCount('start')}}>clear</button>
            <br/>
            {/* <label>debounce:</label><label>{count}</label><button onClick={() => setCount(prev => prev + 1)}>+</button> */}
            <br />
            {/* <label>first update:</label><label>{count}</label><button onClick={() => setCount(prev => prev + 1)}>+</button> */}
        </>
    )
}