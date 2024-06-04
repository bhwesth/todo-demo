import { useState } from "react";
import useInput from "../../hooks/useInput";

export default function Form(props) {

    const [value, change, reset] = useInput()
    
    function handleSubmit(event) {
        event.preventDefault();
        props.add(value);
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Skriv dit fjol</span>
                <input value={value} type="text" onChange={change} />
                <button type="submit">Tilføj fjol</button>
            </label>
        </form>
    );
}
