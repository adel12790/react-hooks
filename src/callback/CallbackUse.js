import {useState, useMemo, useCallback} from 'react';
import { useTheme, useThemeUpdate } from "../context/ThemeContext"
import {List} from './list'

export function CallbackUse() {
    const [number, setNumber] = useState(0)
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    // avoiding resetting this function on each re-render
    // we need to use callbacks to return the same function and only update on number changed.
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const themeStyle = useMemo(() => {
        return {backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white': 'black'}
    }, [darkTheme])
    return (
        <>
            <h1>Callback example:</h1>
            <input type="number" value={number} onChange={e => setNumber(Number(e.target.value))} />
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyle}>
                <List getItems={getItems} />
            </div>

        </>
    )
}