import { useEffect, useRef } from "react";


// only run on dep. updates and prevent from running on first render
export default function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        // bail out on first render
        if(firstRenderRef.current) {
            firstRenderRef.current = false;
            return
        }

        return callback()
    }, [...dependencies])
}