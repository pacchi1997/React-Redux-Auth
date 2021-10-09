import { createSlice } from "@reduxjs/toolkit";


const DEFAULT_AUTHENICATION = {
    isAuthenticated : false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState : DEFAULT_AUTHENICATION ,
    reducers : {
      login(state){
       state.isAuthenticated = true;
      },
      logout(state){
      state.isAuthenticated = false;
      }
    }

});

export const authActions = authSlice.actions;
export default authSlice.reducer;