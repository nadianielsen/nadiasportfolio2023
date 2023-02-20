import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App /> }>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

