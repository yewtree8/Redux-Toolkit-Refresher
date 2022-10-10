import {createSlice} from "@reduxjs/toolkit"

// Let's see if I can remember slices.
// setup structure.

export const userSlice = createSlice({
    name: "user",
    initialState: { value: {  name: "Mat", age: 24, email: "test@email.com"  } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
    }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;