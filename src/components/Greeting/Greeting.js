import {useState} from "react";


const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Hello world!</h2>
            {!changedText && <p>Tekst1</p>}
            {changedText && <p>Tekst2</p>}
            <button onClick= {changeTextHandler}>Change</button>
        </div>
    )
}

export default Greeting;