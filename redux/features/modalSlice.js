import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        toggleModal: false
    },
    reducers: {
        setToggleModal: (state, action) => {
            state.toggleModal = action.payload
        },
    }
});

export const {setToggleModal} = modalSlice.actions;