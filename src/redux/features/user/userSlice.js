import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Joey Tribbiani",
    email: "joey@gmail.com",
    userTasks: [],
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers: {},
})

export default userSlice.reducer