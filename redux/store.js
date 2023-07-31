import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { userSlice } from "./features/userSlice";
import { doctorSlice } from "./features/doctorSlice";
import { tabSlice } from "./features/tabSlice";
import { modalSlice } from "./features/modalSlice";

export default configureStore({
    reducer: {
        alerts: alertSlice.reducer,
        user: userSlice.reducer,
        doctor: doctorSlice.reducer,
        tab: tabSlice.reducer,
        modal: modalSlice.reducer
    }
})