import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';
import ProductsPage from './pages/Products';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }, // path: ''
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetail /> },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
