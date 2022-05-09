import { useState, useEffect } from "react";
import axios from "axios";
import {GeneralEstils, CuadratEstils,BoxesEstils, SubTitulEstils, ImgEstils} from "./CriptomonedesEstils";

import { Link } from 'react-router-dom';

import Footer from "../Footer/Footer";


const Criptomonedes = () => {
  const [cryptosApi, setCryptosApi] = useState([]);   /*Cryptos de la Api Coingeko */
  

  let lista;

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false`)
      .then((res) => {
        console.log(res.data)
        setCryptosApi(res.data);
      })
  }, []);
  
        
      lista = cryptosApi.map( (coin, key) => 
        <div key={key} coin={coin}>
          <Link
              to={`/criptoDetall/${coin.id}/`}
              key={key}
              
          >
              <CuadratEstils >
                <div>
                    <ImgEstils src={coin.image} alt="Imatge cripto"/>
                </div>
                <h2>{coin.name} </h2>
                <h3>{coin.current_price} Eur</h3>
                </CuadratEstils>
                
          </Link>

        </div>
        )
     
    return (
        
        <>
        <GeneralEstils>

            <h1>Llistat Top 25 Criptos</h1>
              <SubTitulEstils> Dale click para más información</SubTitulEstils>
            <BoxesEstils>
              {lista} 
            </BoxesEstils>
                         
        
        <Footer/>
        </GeneralEstils>
        </>
      );
  }
  
export default Criptomonedes;