import {createSlice} from "@reduxjs/toolkit"

// Let's see if I can remember slices.
// setup structure.

const initialUserStateValue = { value: {  name: "Mat", age: 24, email: "test@email.com"  } }; //Create teh dummy

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserStateValue, //Remember this is how you set the default state
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = initialUserStateValue
        }
    }
});

export const { login, logout} = userSlice.actions;

export default userSlice.reducer;