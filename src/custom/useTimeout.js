import { useCallback, useEffect, useRef } from "react";


export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback);
    const timeoutRef = useRef()

    // everytime callback changes we set it to our ref
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    // the set will start off the timeout with delay value
    const set = useCallback(() => {
        console.log('set timeout');

        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        console.log('clear timeout');
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    // start the set timeout on render
    useEffect(() => {
        console.log('render timeout')
        set()

        // and clear it on going out.
        return clear
    }, [delay, set, clear])

    const reset = useCallback(() => {
        console.log('reset timeout');
        clear()
        set()
    }, [set, clear])

    return {clear, reset};
}