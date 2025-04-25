
function Contacto() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado')
    }
    return (
        <>
            <h1 className="title-contacto">Contacto</h1>
            <form className="form-contacto" onSubmit={handleSubmit}>
                <input className="input-contacto"
                    type="text"
                    placeholder="Ingresa tu Nombre"

                />
                <input className="input-contacto"
                    type="email"
                    placeholder="Ingresa tu Email"
                />
                <button className="btn-contacto" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Contacto