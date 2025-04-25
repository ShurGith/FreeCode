import { useEffect } from "react"

function Nosotros() {



    const clickear = () => {
        console.log('click')
    }
    useEffect(() => {

        window.addEventListener('click', clickear)
        return () => {
            window.removeEventListener('click', clickear)
        }
    }, [])


    return (
        <h1>nosotros</h1>
    )
}

export default Nosotros