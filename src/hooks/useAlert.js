import { useDispatch } from "react-redux";
import alertReducer from "../redux/reducers/alert.reducer";

export function useAlert() {
    const dispatch = useDispatch();
    const showAlert = alertReducer.actions.showAlert;
    const closeAlert = alertReducer.actions.closeAlert;


    function Alert(type, message) {
        dispatch(showAlert({ type, message }));
        setTimeout(() => {
            dispatch(closeAlert());
        }, 3000);
    }

    return Alert;
}