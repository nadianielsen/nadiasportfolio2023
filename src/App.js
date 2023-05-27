import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Websites from './pages/Websites';
import GraphicDesign from './pages/GraphicDesign';
import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Albums from './pages/Albums';
import Posters from './pages/Posters';
import Drawings from './pages/Drawings';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/websites' element={<Websites />} />
        <Route path='/graphicdesign' element={<GraphicDesign />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/posters' element={<Posters />} />
        <Route path='/drawings' element={<Drawings />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
