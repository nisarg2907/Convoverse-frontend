// routes
import React from "react";
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import ThemeSettings from "./components/settings";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "./redux/slices/app";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const vertical = "bottom";
const horizontal = "center";
function App() {
 const dispatch = useDispatch();
 const { open, message, severity } = useSelector((state) => state.app.snackbar);
 console.log("Snackbar State:", open, severity, message);
  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>

      {message && open ?   
       <Snackbar
       anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
       open={open}
       autoHideDuration={4000}
       key={vertical + horizontal}
       onClose={() => {
         dispatch(closeSnackbar());
       }}
     >
       <Alert onClose={() => {dispatch(closeSnackbar());}} severity={severity} sx={{ width: "100%" }}>
         {message}
       </Alert>
     </Snackbar>
      : <>
          
      </>}
     
    </>
  );
}

export default App;
