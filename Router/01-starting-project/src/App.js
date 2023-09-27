import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";


const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [{ path: '/', element: <HomePage /> },
    { path: '/products', element: <Products /> },]
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
