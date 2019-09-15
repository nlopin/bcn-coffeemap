import {useEffect, useState} from "react"

export const useWindowHeight = (): number => {
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleWindowResize = (): void => setHeight(window.innerHeight)

        window.addEventListener('resize', handleWindowResize)
        return (): void => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return height
}