import { useDeferredValue, useEffect, useMemo } from "react"

export function List({input}) {
    const LIST_SIZE = 20000
    const deferredInput = useDeferredValue(input)

    useEffect(() => {
        console.log('Effect', `Input: ${input} - Deferred Input: ${deferredInput}`);
    }, [input, deferredInput])


    const list = useMemo(() => {
        console.log('Memo', `Input: ${input} - Deferred Input: ${deferredInput}`);

        const l = []
        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l;
    }, [deferredInput])


    return list;
}