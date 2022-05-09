import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";
import {GeneralEstils, BoxEstils, SpanEstils, ItemA, ItemB, ItemC, Img3Estils, ParrafoEstils, NomCryptoEstils} from "./CriptoDetallEstils";
const CriptoDetall = () => {
    const[cryptoSeleccionada, setCryptoSeleccionada ]= useState(null)
    const { id } = useParams();
   

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=true&market_data=true`)
        .then(res => res.json()) 
        .then((item) => setCryptoSeleccionada(item)); 
      }, [id])

      console.log("seleccio",cryptoSeleccionada)
     
      console.log("id", id) 
      if(!cryptoSeleccionada) return null
    return(
        <>
            <NavBar/>
            <GeneralEstils>
                <BoxEstils>
                    <ItemA>
                        <NomCryptoEstils>{cryptoSeleccionada.name}-{cryptoSeleccionada.symbol}</NomCryptoEstils>
                        <SpanEstils>Ranking: {cryptoSeleccionada.market_cap_rank}</SpanEstils>

                    </ItemA>

                    <ItemB>
                        <ParrafoEstils>Precio: {cryptoSeleccionada.market_data.current_price.eur} Eur</ParrafoEstils>
                        <ParrafoEstils>Movimiento: {cryptoSeleccionada.market_data.market_cap_change_percentage_24h} %</ParrafoEstils>
                        <ParrafoEstils>Total Supply: {cryptoSeleccionada.market_data.total_supply}</ParrafoEstils>
                        <ParrafoEstils>Volumen Total: {cryptoSeleccionada.market_data.total_volume.eur} Eur</ParrafoEstils>
                    </ItemB>

                    <ItemC>
                        <Img3Estils src={cryptoSeleccionada.image.large}/>
                    </ItemC>

                </BoxEstils>
            </GeneralEstils>
            <Footer/>
        </>
    )
}

export default CriptoDetall;