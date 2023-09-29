const Greetings = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }

    return (
        <div>
            <p>Hello World!</p>
            {!changeText && <Output>It's good to see you!</Output>}
            {changeText && <Output>Changed Text!</Output>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}