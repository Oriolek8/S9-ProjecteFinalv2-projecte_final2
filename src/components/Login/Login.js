import { useAuth0 } from "@auth0/auth0-react";
import { ButtonEstils} from './LoginEstils';
export const LoginButton = () =>{
    const {loginWithRedirect} = useAuth0();

    return <ButtonEstils onClick={ () => (loginWithRedirect())}>Login</ButtonEstils>
}

