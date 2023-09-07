import { useState, useTransition } from "react";


// Transition is made ot run lower priority, time consuming operations after the higher priority ones like renders for example.
export function TransitionUse() {
    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    // simulte a change in a huge list
    const LIST_SIZE = 2000

    function handleChange(e) {
        // this separates the renders on for set the input state
        setInput(e.target.value)
        // the other one with this computation finishes.
        startTransition(() => {

            const l = []
            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value)
            }
            setList(l)
        })
    }

    return (
        <>
            <h1>Transition example:</h1>
            <input value={input} onChange={handleChange} />
            {isPending ? <div>loading...</div>:list.map((item, index) => (<div key={index}>{item}</div>))}
        </>
    )
}