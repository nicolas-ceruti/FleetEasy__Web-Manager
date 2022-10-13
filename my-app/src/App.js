import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import DriversRegister from "./Pages/DriversRegister/driversRegister";
import VechileRegister from "./Pages/VechileRegister/vechileRegister";
import CollectRegister from "./Pages/CollectRegister/collectRegister";
import DriverCard from "./Pages/Driver/driver";
import Vechile from "./Pages/Vechiles/vechiles";
import Profile from "./Pages/Profile/profile";
import Collects from "./Pages/Collects/collect";
import CollectProfile from "./Pages/CollectProfile/collectProfile";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/driversRegister' element={ <DriversRegister/> }/>
          <Route path='/vechileRegister' element={ <VechileRegister/> }/>
          <Route path='/collectRegister' element={ <CollectRegister/> }/>
          <Route path='/driver' element={ <DriverCard/> }/>
          <Route path='/vechile' element={ <Vechile/> }/>
          <Route path='/profile/:id' element={ <Profile/> }/>
          <Route path='/collect' element={ <Collects/> }/>
          <Route path='/collect/:id' element={ <CollectProfile/> }/>
          <Route path="*" element={<p>404 - Página não encontrada</p>} />
        </Routes>
      </BrowserRouter>

      
    );
}
 
export default App;