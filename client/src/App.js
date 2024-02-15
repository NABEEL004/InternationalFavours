import React from 'react'
import Landing from "./pages/Landing"
import Browse from './pages/Browse';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: "404 Not Found",
  },
  {
    path: "/browse",
    element: <Browse/>,
  }
])

function App() {
  return (
    <div className="bg-gradient-to-b from-pale-green from-30% to-dark-green h-screen v-screen">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
