import { useState, useMemo, useEffect } from "react";
import { useTheme, useThemeUpdate } from "../context/ThemeContext"

export function MemoUse() {
    const [number, setNumber] = useState(0)
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])
    
    // to avoid referential equality of this object for each re-render,
    // we gonna wrap this as well in a useMemo
    const themeStyle = useMemo(() => {
        return {backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white': 'black'}
    }, [darkTheme])

    useEffect(() => {
        console.log('ThemeStyle changed.')
    }, [themeStyle])
    
    return (
        <>
            <h1>Memo example:</h1>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyle}>{doubleNumber}</div>
        </>
    )
}

// simulate a heavy process
function slowFunction(n) {
    for (let i = 0; i < 1000000000; i++) {}
    return n * 2
}