import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", //different values here for type can be contact,starred,shared
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggesidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updatesidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;


export function toggleSidebar(){
   return async ()=>{
     dispatch(slice.actions.toggesidebar());
   }
}

export function UpdateSidebarType(type){
   return async ()=>{
    dispatch(slice.actions.updateSidebarType({
        type,
    }))
   }
}
