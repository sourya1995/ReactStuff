export default function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    }
    return (
            <div>
                <input ref={inputEl} type="text" />
                <button onClick={onButtonClick}>Focus</button>
            </div>
    );
;}