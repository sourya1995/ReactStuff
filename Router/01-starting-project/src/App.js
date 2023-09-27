import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/products', element: <Products />},

]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
