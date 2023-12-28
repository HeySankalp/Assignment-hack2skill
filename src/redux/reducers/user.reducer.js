import { createSlice } from "@reduxjs/toolkit";
import InitialStore from "../store/intialstore";
import Cookies from "js-cookie";

export const setUser = (state,action) => {
    state.currentUser = action.payload;
};

export const removeUser = (state, action) => {
    state.loggedIn = false;
    Cookies.remove("tokenId");
}

export default createSlice({
    name: "authReducer",
    initialState: InitialStore.user,
    reducers: {
        setUser,
        removeUser
    },
});