import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";


const rootReducer = combineReducers({
    userReducer: userReducer.reducer,
    authReducer: authReducer.reducer,
    alertReducer: alertReducer.reducer
});

export default rootReducer;
