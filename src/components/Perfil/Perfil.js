import { useAuth0 } from "@auth0/auth0-react";
import {GeneralEstils, ImgEstils, H3Estils, PEstils} from './PerfilEstils';
export const Perfil = () => {
const {user, isAuthenticated} = useAuth0();
    return(
        isAuthenticated &&(
        <GeneralEstils>
            <ImgEstils src={user.picture} alt={user.name}/>
            <H3Estils>{user.name}</H3Estils>
            <PEstils>{user.email}</PEstils>
        </GeneralEstils>
    )
    )
}

