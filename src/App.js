import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Websites from './pages/Websites';
import GraphicDesign from './pages/GraphicDesign';
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/websites' element={<Websites />} />
        <Route path='/graphicdesign' element={<GraphicDesign />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
