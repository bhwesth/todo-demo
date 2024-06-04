import { useState } from "react";

export default function useInput() {
    const [input, setInput] = useState("");

    function change(event) {
        setInput(event.target.value);
    }

    function reset() {
        setInput("")
    }

    return [ input, change, reset ];
}