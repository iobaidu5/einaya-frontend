import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
    name: "tab",
    initialState: {
        activeTabId: 0
    },
    reducers: {
        setActiveTabId: (state, action) => {
            state.activeTabId = action.payload
        }
    }
});

export const {setActiveTabId} = tabSlice.actions;