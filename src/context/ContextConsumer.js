import { useTheme, useThemeUpdate } from "./ThemeContext"

export default function ContextConsumer() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    return (
        <>
            <h1>Context example: </h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <h1 style={darkTheme ? {color: 'grey'} : {color: 'green'}}>Color</h1>
        </>
    );
}