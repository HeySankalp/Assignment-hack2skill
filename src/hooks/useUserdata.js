import { useSelector } from "react-redux";

export function useUserdata() {

    const isLoggedIn = useSelector((state) => state.authReducer.loggedIn);
    const currentUser = useSelector((state) => state.userReducer.currentUser);

    return {
        isLoggedIn,
        currentUser
    }

}