import { HeaderEstils,CaixaTopEstils,CaixaTitolEstils, TitolEstils,TitulinEstils,CaixaLinksEstils,EnlacesEstils } from './NavbarEstils';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import{Perfil} from "../Perfil/Perfil";
import{LoginButton} from "../Login/Login"
import{LogoutButton} from "../Logout/Logout"


const NavBar = () => {
    const {isAuthenticated} = useAuth0();

return(
    <HeaderEstils> 
        
        <CaixaTopEstils>
            <CaixaTitolEstils>
                <TitolEstils>CryptoWeb</TitolEstils>
                <TitulinEstils>Tu web de información sobre criptomonedas</TitulinEstils>
            </CaixaTitolEstils> 
            <div>
            {isAuthenticated ? 
            <>
                <Perfil/>
                <LogoutButton/>
            </>
            :
                <LoginButton/> 
            }
            </div> 
        </CaixaTopEstils>
        <CaixaLinksEstils> 
                <EnlacesEstils to="/">Home</EnlacesEstils>
                <EnlacesEstils to="/criptomonedes">Criptomonedes</EnlacesEstils>
        </CaixaLinksEstils>

        
    </HeaderEstils>
)
}

export default NavBar;