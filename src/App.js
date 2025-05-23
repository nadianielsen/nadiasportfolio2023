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
import FrontendDeveloper from './pages/FrontendDeveloper';
import Design from './pages/Design';
import AboutMe from './pages/AboutMe';
import Schoolprojects from './pages/SchoolProjects';
import Hf1 from './pages/Hf1';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout /> }>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/frontenddeveloper' element={<FrontendDeveloper />} />
        <Route path='/design' element={<Design />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/hf1' element={<Hf1 />} />
        <Route path='/websites' element={<Websites />} />
        <Route path='/graphicdesign' element={<GraphicDesign />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/posters' element={<Posters />} />
        <Route path='/schoolprojects' element={<Schoolprojects />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;