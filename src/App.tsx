import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Casters } from './features/tools/casters/Casters'
import Header from './features/header/Header'
import { Tools } from './features/tools/Tools'

const router = createBrowserRouter([
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/casters",
    element: <Casters />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
