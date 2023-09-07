import React, { useState, useRef, useEffect } from "react";

export function RefUse() {
    const [name, setName] = useState('')

    // renders are useful for persisting values without causing rerenders
    const renderCount = useRef(1)
    const inputRef = useRef()

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    // onMount focus input
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <>
            <h1>Ref example:</h1>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>name: {name}</div>
            <div>Render count: {renderCount.current}</div>
        </>
    )
}