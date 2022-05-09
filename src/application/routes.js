
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from '../components/Home/Home';


import Criptomonedes from '../components/Criptomonedes/Criptomonedes'
import CriptoDetall from  '../components/CriptoDetall/CriptoDetall'


export default () => (
    
  
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>} />
            <Route  path="/criptomonedes/" element={<Criptomonedes />} />
            <Route  path="/criptoDetall/:id" element={<CriptoDetall/>} />

            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
)

