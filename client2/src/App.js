import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext.js';

import Landing from "./pages/Landing"
import Browse from './pages/Browse';
import Error from './pages/Error';
import SignIn from './pages/SignIn';
import Faq from './pages/Faq';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
    errorElement: <Error/>,
  },
  {
    path: "/browse",
    element: <Browse/>,
  },
  {
    path: "/signin",
    element: <SignIn/>,
  },
  {
    path: "/faq",
    element: <Faq/>,
  },
])

function App() {
  return (
    <AuthProvider>
      <div className="h-screen w-screen">
        <div className='fixed z-[-999] bg-gradient-to-b from-pale-green from-30% to-dark-green h-screen w-screen'></div>
        <RouterProvider router={router}/>
      </div>
    </AuthProvider>
  );
}

export default App;
