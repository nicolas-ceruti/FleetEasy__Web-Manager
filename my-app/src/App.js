import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import Localizar from "./Pages/Localizar/localizar"
 
function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> }/>
          <Route path='/home' element={ <Home/> }/>
          <Route path='/map' element={ <Localizar/> }/>

          <Route path="*" element={<p>404 - Página não encontrada</p>} />
        </Routes>
      </BrowserRouter>

      
    );
}
 
export default App;