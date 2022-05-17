import { useContext } from "react";

export const useAuth = () => {
    const [state, setState] = useContext(AppContext);

    return {
        isAuthenticated: !!state.user,
    };
}