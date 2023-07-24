 import { createSlice } from "@reduxjs/toolkit";


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
    toggesidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updatesidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;


export function toggleSidebar(){
   return async (dispatch,getState)=>{
     dispatch(slice.actions.toggesidebar());
   }
}

export function UpdateSidebarType(type) {
  return async(dispatch, getState) => {
    dispatch(slice.actions.updatesidebarType({ type }));
  };
}

