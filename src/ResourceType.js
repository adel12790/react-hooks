import { useEffect, useState } from "react";


export default function ResourceType() {
    const [resourceType, setResourceType] = useState('post');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    console.log('render')

    useEffect(() => {
        console.log('resource type changed');
    }, [resourceType])

    function changeWidth() {
        setWindowWidth(window.innerWidth)
    }

    // if we set the effect with empty array then this will run only on mount
    useEffect(() => {
        console.log('onMount');
        window.addEventListener('resize', changeWidth )

        // clean up attached listeners
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])
    return (
        <>
            <div>
                <button onClick={() => setResourceType('post')}>Post</button>
                <button onClick={() => setResourceType('Users')}>Users</button>
                <button onClick={() => setResourceType('Comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>

            <h2>{windowWidth}</h2>
        </>
    )
}