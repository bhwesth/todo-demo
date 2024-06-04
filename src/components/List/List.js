import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function List(props) {

    return (
        <ul>
            {props.list?.map((item, index) => (
                <li>
                    <input
                        value={item}
                        onChange={(event) => props.edit(event, index)}
                    />
                    <button onClick={() => props.remove(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </li>
            ))}
        </ul>
    );
}
