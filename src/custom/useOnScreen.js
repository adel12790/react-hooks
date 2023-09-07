import { useEffect, useState } from "react";

export default function useOnScreen(ref, rootMargin = '0px') {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log(ref.current)

        const reference = ref.current;

        if(reference === null) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        );
        observer.observe(reference);

        return () => {
            if(reference === null) return
            
            observer.unobserve(reference);
        }

    }, [ref.current, rootMargin])

    return isVisible;
}
