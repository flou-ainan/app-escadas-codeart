import React from "react"

export default function Form(props) {

    return (
        <div id="formulario">

            <div className="campo_formulario">
                <label htmlFor="altura">Altura em cm: </label>            
                <input
                    className="entrada"
                    type="text"
                    placeholder="Altura"
                    id="altura"
                    onChange={props.handleChange}
                    value={props.altura}
                />
            </div>

            <div className="campo_formulario">
                <label htmlFor="espelho">Espelho em cm: </label>
                <input
                    className="entrada"
                    type="text"
                    placeholder="Espelho"
                    id="espelho"
                    onChange={props.handleChange}
                    value={props.espelho}
                />
            </div>

            <div className="campo_formulario">
                <label htmlFor="piso">Piso em cm: </label>
                <input
                    className="entrada"
                    type="text"
                    placeholder="Piso"
                    id="piso"
                    onChange={props.handleChange}
                    value={props.piso}
                />
            </div>

            <br />
            <br />
        </div>
    )
}
