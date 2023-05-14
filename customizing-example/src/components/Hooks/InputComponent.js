export default function InputComponent() {
    const [inputText, setText] = useState('hello') //inputState will have an initial state of Hello

    function handleChange(e) {
        setText(e.target.value) //altering the state
    }

    return (
        <div>
            <input value={inputText} onchange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>Reset</button>
        </div>
    );
};