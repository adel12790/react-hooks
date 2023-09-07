import { useEffect, useState } from "react";

export function List({getItems}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('updating items')
        setItems(getItems())
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}