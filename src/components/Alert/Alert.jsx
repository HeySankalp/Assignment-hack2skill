import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import alertReducer from '../../redux/reducers/alert.reducer';

const AlertProvider = () => {

    const closeAlert = alertReducer.actions.closeAlert;
    const dispatch = useDispatch();
    const alertShow = useSelector(state => state.alertReducer.show);
    const alertType = useSelector(state => state.alertReducer.type);
    const alertMessage = useSelector(state => state.alertReducer.message);

    return (
        <>
            <Snackbar
                open={alertShow}
                autoHideDuration={3000}
                onClose={() => { dispatch(closeAlert()) }}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >

                <Alert
                    onClose={() => { dispatch(closeAlert()) }}
                    severity={alertType}
                    sx={{ width: "100%" }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
        </>
    )
}

export default AlertProvider;