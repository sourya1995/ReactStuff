import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [{ path: '/', element: <HomePage /> },
    { path: '/products', element: <Products />, }, 
    {path: '/products/:productId', element: <ProductDetailPage />}],
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
