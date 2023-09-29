const Greetings = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }

    return (
        <div>
            <p>Hello World!</p>
            {!changeText && <p>It's good to see you!</p>}
            {changeText && <p>Changed Text!</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )
}