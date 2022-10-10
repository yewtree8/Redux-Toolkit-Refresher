import {createSlice} from "@reduxjs/toolkit"

// Let's see if I can remember slices.
// setup structure.

const initialSetValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {value : initialSetValue }, //Remember this is how you set the default state
    reducers: {
        changeColour: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeColour} = themeSlice.actions;

export default themeSlice.reducer;