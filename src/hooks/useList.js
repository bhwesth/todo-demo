import { useEffect, useState } from "react";

export default function useList() {
    const [list, setList] = useState();

    useEffect(() => {
        if (list) {
            localStorage.setItem("list", JSON.stringify(list))
        }
    }, [list])

    useEffect(() => {
        if (list) {
            setList(JSON.parse(localStorage.getItem("list")) || []);
        }
    }, [])

    function add(input) {
        console.log(input);
        setList((prevState) => [...prevState, input]);
    }

    function remove(index) {
        setList((prevState) =>
            prevState.filter((item, itemIndex) => index !== itemIndex)
        );
    }

    function edit(event, index) {
        setList((prevState) =>
            prevState.map((item, itemIndex) =>
                index === itemIndex ? event.target.value : item
            )
        );
    }

    return {list, add, remove, edit}
}