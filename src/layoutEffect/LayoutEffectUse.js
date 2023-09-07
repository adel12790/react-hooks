import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Layout effect is the same as useEffect, the difference is that it happens sync between react dom calculation and actual render process
export function LayoutEffectUse() {
    const [count, setCount] = useState(0)

    const [showPopupAsync, setShowPopupAsync] = useState(false)
    const popupAsyncRef = useRef()
    const showBtnAsyncRef = useRef()
    
    
    const [showPopupSync, setShowPopupSync] = useState(false)
    const popupSyncRef = useRef()
    const showBtnSyncRef = useRef()
    // Async
    useEffect(() => {
        console.log('effect', count)

        if(popupAsyncRef.current == null || showBtnAsyncRef.current == null) return;

        const {bottom, left} = showBtnAsyncRef.current.getBoundingClientRect()
        popupAsyncRef.current.style.top = `${bottom + 200}px`
        popupAsyncRef.current.style.left = `${left}px`
    }, [count, showPopupAsync])

    // Sync
    useLayoutEffect(() => {
        console.log('layout effect', count)
        if(popupSyncRef.current == null || showBtnSyncRef.current == null) return;

        const {bottom, left} = showBtnSyncRef.current.getBoundingClientRect()
        popupSyncRef.current.style.top = `${bottom + 200}px`
        popupSyncRef.current.style.left = `${left}px`

    }, [count, showPopupSync])
    return (
        <>
            <h1>LayoutEffect example:</h1>
            <label>{count}</label>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <br/>
            <button ref={showBtnAsyncRef} onClick={() => setShowPopupAsync(prev => !prev)}>show popup async</button>
            {showPopupAsync && (<div ref={popupAsyncRef} style={{position: "absolute"}}>Async popup</div>)}

            <button ref={showBtnSyncRef} onClick={() => setShowPopupSync(prev => !prev)}>show popup sync</button>
            {showPopupSync && (<div ref={popupSyncRef} style={{position: "absolute"}}>Sync popup</div>)}

        </>
    )
}
