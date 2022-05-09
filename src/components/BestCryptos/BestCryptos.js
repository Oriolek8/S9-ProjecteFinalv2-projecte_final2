import { useEffect, useState } from "react"
import axios from "axios"
import {GeneralEstils, BoxTopEstils,TopEstils, CuadratEstils, ImgEstils,Img2Estils, BoxTextEstils,Item1Estils, Item3Estils, Item2Estils} from "./BestCryptosEstils";
import imgCrypto from "./imgCrypto.jpg"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const BestCryptos = () => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=6&page=1&sparkline=false`)
        .then((res) => {
            setData(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    console.log("data", data)
    if (!data) return null
    
    return(
        
            <GeneralEstils>
                
                <TopEstils>
                    <h2>Millors Criptomonedes</h2>
                    <h4>Aquí estan las 6 criptomonedas más importantes por market Cap</h4>
                </TopEstils>

                <BoxTopEstils> {/*Caixa millors cryptos */}

                    <CuadratEstils>{/*Cryto 1 */}
                        <div>
                            <ImgEstils src={data[0].image} alt="Cryto 1"/>
                        </div>
                        <div>
                            <h3>{data[0].name}</h3>
                            <h4>{data[0].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[0].price_change_percentage_24h} %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>
                
                    <CuadratEstils>{/*Cryto 2 */}
                        <div>
                            <ImgEstils src={data[1].image} alt="Cryto 2"/>
                        </div>
                        <div>
                            <h3>{data[1].name}</h3>
                            <h4>{data[1].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[1].price_change_percentage_24h } %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>

                    <CuadratEstils>{/*Cryto 3 */}
                        <div>
                            <ImgEstils src={data[2].image} alt="Cryto 3"/>
                        </div>
                        <div>
                            <h3>{data[2].name}</h3>
                            <h4>{data[2].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[2].price_change_percentage_24h} %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>

                    <CuadratEstils>{/*Cryto 4 */}
                        <div>
                            <ImgEstils src={data[3].image} alt="Cryto 3"/>
                        </div>
                        <div>
                            <h3>{data[3].name}</h3>
                            <h4>{data[3].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[3].price_change_percentage_24h} %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>

                    <CuadratEstils>{/*Cryto 5 */}
                        <div>
                            <ImgEstils src={data[4].image} alt="Cryto 3"/>
                        </div>
                        <div>
                            <h3>{data[4].name}</h3>
                            <h4>{data[4].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[4].price_change_percentage_24h} %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>

                    <CuadratEstils>{/*Cryto 6 */}
                        <div>
                            <ImgEstils src={data[5].image} alt="Cryto 3"/>
                        </div>
                        <div>
                            <h3>{data[5].name}</h3>
                            <h4>{data[5].current_price.toLocaleString()} Eur</h4>
                        
                            <h5>{data[5].price_change_percentage_24h} %</h5>{/*Estils vermell i verd */}
                        </div>
                    </CuadratEstils>
                </BoxTopEstils>
                
                <BoxTextEstils>
                    <Item1Estils>
                        <h2>Las criptomonedas</h2>
                        <p>Una <span>Criptomoneda</span> es un medio digital de intercambio que utiliza criptografía fuerte para asegurar las transacciones, controlar la creación de unidades adicionales y verificar la transferencia de activos usando tecnologías de registro distribuido. Las criptomonedas son un tipo de divisa alternativa o moneda digital. Existe controversia respecto a que las criptomonedas tienen que ser de control descentralizado o monedas centralizadas por los bancos centrales u otra entidad</p>
                    </Item1Estils>
                    <Item2Estils>
                        <h3>Características</h3>
                        <p>En los sistemas de criptomonedas, se garantiza la seguridad, integridad y equilibrio de sus estados de cuentas (contabilidad) por medio de una red estructurada de agentes (transferencia de archivo segmentada o transferencia de archivo multifuente) que se verifican (desconfían) mutuamente llamados mineros, que son, en su mayoría, público en general y protegen activamente la red (el entramado) al mantener una alta tasa de procesamiento de algoritmos, con la finalidad de tener la oportunidad de recibir una pequeña propina, que se reparte de manera aleatoria</p>
                    </Item2Estils>
                    <Item3Estils>
                        <Img2Estils src={imgCrypto}/>
                    </Item3Estils>
                    
                </BoxTextEstils>



                
            </GeneralEstils>
            
    
    )
}
export default BestCryptos;
