import { createSlice } from "@reduxjs/toolkit";
import InitialStore from "../store/intialstore";
import Cookies from "js-cookie";

export const login = (state,) => {
    state.loggedIn = true;
};

export const logout = (state,) => {
    state.loggedIn = false;
    Cookies.remove("tokenId");
}

export default createSlice({
    name: "authReducer",
    initialState: InitialStore.auth,
    reducers: {
        login,
        logout
    },
});