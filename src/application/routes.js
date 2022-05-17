
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import PrivateRoute from './PrivateRoute';


import Home from '../components/Home/Home';
import Criptomonedes from '../components/Criptomonedes/Criptomonedes'
import CriptoDetall from  '../components/CriptoDetall/CriptoDetall'


const R = () => {
    
   
  
    return (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Home/>} />
            {/*<Route exact path="/criptomonedes" element={<PrivateRoute component={Criptomonedes} />} />
            <Route exact path="/criptoDetall/:id" element={<PrivateRoute component={CriptoDetall} />} />*/}

            <Route path="/criptomonedes" element={<Criptomonedes/>} />
            <Route path="/criptoDetall/:id" element={<CriptoDetall/>} />
            

            <Route path="*" component={() => <div>404</div>} />
        </Routes>
    </BrowserRouter>
    )
}
export default withAuthenticationRequired(R);