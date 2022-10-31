import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './componant/Home';
import AddUser from './componant/AddUser';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/users/add',
      element: <AddUser></AddUser>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
