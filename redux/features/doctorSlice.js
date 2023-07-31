import { createSlice } from "@reduxjs/toolkit";

export const doctorSlice = createSlice({
    name: "doctor",
    initialState: {
        doctor: "",
        show: false
    },
    reducers: {
        setDoctor: (state, action) => {
            state.doctor = action.payload
        },
        showSidebar: (state, action) => {
            state.show = action.payload
        }
    }
});

export const {setDoctor, showSidebar} = doctorSlice.actions;