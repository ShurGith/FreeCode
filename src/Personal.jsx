import data from "./data/personas.json"
import { useEffect, useState } from "react"

const ListPesonal = () => {
    //console.log(data)
    const [personas, setPersonas] = useState([])

    const listarPersonas = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 200)
        })
    }

    useEffect(() => {
        listarPersonas()
            .then((res) => {
                setPersonas(res);
                console.log(personas)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    const muestraLista = (persona) => {
        return (
            <div key={persona.id}>
                <h2>{persona.first_name}</h2>
                <p>{persona.last_name}</p>
                <p>{persona.email}</p>
                <p>{persona.gender}</p>
                <img src={persona.avatar} alt={persona.first_name} />
            </div>
        )
    }

    return (
        <div>
            <h1>Lista de Personas</h1>
            {
                personas.length > 0 &&
                personas.map((persona) => { return (muestraLista(persona)) })
            }

        </div>
    )

}
export default ListPesonal

