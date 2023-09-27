import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: 'p1', title: 'Product 1'}
];

function ProductsPage() {
    return (
        <div>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => <li key={product.id}><Link to={`${product.id}`}>{product.title}</Link></li>)}
            </ul>
        </div>
    );
}


export default ProductsPage;