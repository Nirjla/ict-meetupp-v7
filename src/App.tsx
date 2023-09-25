import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import Gallery from "./pages/Gallery";
import NavBar from './components/NavBar'

import RootLayout from "./layout/RootLayout";


function App() {
  return (
   <>
   <NavBar/>
   <Routes>
    <Route path='/' element={<RootLayout/>}/>
    <Route path='/events' element={<EventsPage/>}/>
    <Route path='/schedule' element={<Schedule/>}/>
    <Route path='/teams' element={<Teams/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
   </>
  );
}

export default App;
