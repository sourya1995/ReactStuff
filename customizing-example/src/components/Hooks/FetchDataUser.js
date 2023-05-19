function FetchDataUser() {
    const [user, setUser] = React.useState([]);

    const fetchData = () => {
        fetch("https://api.github.com/users/{user}/repositories/{setUser}")
        .then((response) => response.json())
        .then((responseData) => setUser(responseData));
    };

    React.useEffect(() => {fetchData();}, []);

    return Object.keys(user).length > 0 ? (
        <div style={{padding: "40px"}}>
            <h1>Customer Data</h1>
            <h2>Name: {user.results[0].name.first}</h2>
            <img src={user.results[0].picture.large} alt="" />
        </div>
    ) : (
        <h1>Data pending...</h1>
    );


}

export default FetchDataUser;