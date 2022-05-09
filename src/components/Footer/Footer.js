import { CaixaFooterEstils,EnlacesEstils,TitolEstils } from "./FooterEstils";
const Footer = () => {

    return(
        <CaixaFooterEstils>
            
                <EnlacesEstils>
                    <TitolEstils>Ajuda</TitolEstils>
                    <a href="#">Suport</a>
                    <a href="#">FAQ</a>
                    
                </EnlacesEstils>
                <EnlacesEstils>
                    <TitolEstils>Información Web</TitolEstils>
                    <a href="#">Sobre nosotros</a>
                    <a href="#">Trabaja con nosotros</a>
                    <a href="#">Marketing</a>
                </EnlacesEstils>
                <EnlacesEstils>
                    <TitolEstils>Comunidad</TitolEstils>
                    <a href="#">Twiter</a>
                    <a href="#">Facebook</a>
                    <a href="#">Discord</a>
                    <a href="#">Instagram</a>
                </EnlacesEstils>
                <EnlacesEstils>
                    <TitolEstils>Donaciones</TitolEstils>
                    <a href="#">Bitcoins</a>
                    <a href="#">Ethereum</a>
                    <a href="#">UST</a>
                </EnlacesEstils>
            
        </CaixaFooterEstils>

    )
}

export default Footer;