import { createSlice } from "@reduxjs/toolkit";
import IntialStore from "../store/intialstore"



export const showAlert = (state, action) => {
    state.message = action.payload.message;
    state.type = action.payload.type;
    state.show = true;
}


export const closeAlert = (state, action) => {
    state.show = false;
    state.message = "";
    state.type = "";
}







export default createSlice({
    name: "alertReducer",
    initialState: IntialStore.alert,
    reducers: {
        showAlert,
        closeAlert
    }
})