import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Potfolio/Potfolio';
import Layout from './components/Layout/Layout';

function App() {
  const routes= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
    {path:'',element:<Content/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'portfolio',element:<Portfolio/>},
    ]},
    
  ])
  return (
   <>
   <RouterProvider router={routes} />
   </>
  );
}

export default App;
