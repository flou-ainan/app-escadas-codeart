import React from "react"

export default function Form(props) {

    return (
        <div>
            <label htmlFor="altura">Altura: </label>            
            <input
                type="text"
                placeholder="Altura"
                id="altura"
                onChange={props.handleChange}
                value={props.altura}
            />
            <label htmlFor="espelho">Espelho: </label>
            <input
                type="text"
                placeholder="Espelho"
                id="espelho"
                onChange={props.handleChange}
                value={props.espelho}
            />
            <label htmlFor="piso">Piso: </label>
            <input
                type="text"
                placeholder="Piso"
                id="piso"
                onChange={props.handleChange}
                value={props.piso}
            />
            <br />
            <br />
        </div>
    )
}
