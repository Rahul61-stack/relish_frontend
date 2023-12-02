import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{login:{id:'',isLoggedIn:false}},
    reducers:{
        login(state,action){
            state.login = {id:action.payload.id, isLoggedIn:true}
        },
        logout(state){
            state.login = {id:'',isLoggedIn:false}
        }
    }
})

export default authSlice