import { Link } from "react-router-dom";
function HomePage() {

    return (
        <div>
            <h1>My Home Page!</h1>
            <p>Go to <Link to="/products" /> the list of products</p> 
        </div>
    );
}

export default HomePage;