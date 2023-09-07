import { useState } from "react"
import { List } from "./List"


// the deferred works like debounce or throtle, what it can do is that it would wait at least 100 milliseconds and then its going to compute
export function DeferredValueUse() {
    const [input, setInput] = useState('')

    return (
        <>
            <h1>DeferredValue example:</h1>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <List input={input} />
        </>
    )
}