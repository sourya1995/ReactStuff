const Switch = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <label className="Switch">
            <input type="checkbox" checked={theme === "light"} onChange={toggleTheme}/>
            <span className="slider-round" />
        </label>
           
        );
};

export default Switch;