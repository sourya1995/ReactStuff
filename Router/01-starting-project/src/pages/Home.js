import { Link, useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }
    return (
        <div>
            <h1>My Home Page!</h1>
            <p>Go to <Link to="products" /> the list of products</p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p> 
        </div>
    );
}

export default HomePage;