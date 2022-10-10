import {createSlice} from "@reduxjs/toolkit"

// Let's see if I can remember slices.
// setup structure.
export const userSlice = createSlice({
    name: "user",
    initialState: {value: {name: "", age: 0, email: ""} },
    reducer: {
        login: (state, action) => {
            state.value = action.payload;
        },
    }
});
export default userSlice.reducer;