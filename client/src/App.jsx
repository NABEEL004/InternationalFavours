import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext.jsx';

import Landing from "./pages/Landing.jsx"
import Browse from './pages/Browse.jsx';
import Error from './pages/Error.jsx';
import SignIn from './pages/SignIn.jsx';
import Faq from './pages/Faq.jsx';
import Chat from './pages/Chat.jsx';
import Request from './pages/Request.jsx';


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
  {
    path: "/chat",
    element: <Chat/>,
  },
  {
    path: "/request",
    element: <Request/>,
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
