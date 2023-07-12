import {
    Box,
    IconButton,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import { ArrowLeft } from "phosphor-react";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { UpdateSidebarType } from "../redux/slices/app";
import Message from "./Message";

  
  const StarredMessages = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    
    return (
      <Box sx={{ width: "320px", height: "100vh" }}>
        <Stack sx={{ height: "100%" }}>
          <Box
            sx={{
              boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
              width: "100%",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "#F8FAFF"
                  : theme.palette.background,
            }}
          >
            <Stack
              sx={{ height: "100%", p: 2 }}
              direction="row"
              alignItems={"center"}
              spacing={3}
            >
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <ArrowLeft />
              </IconButton>
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
          </Box>
  

  
          {/* body */}
          <Stack
            sx={{
              height: "100%",
              position: "relative",
              flexgrow: 1,
              overflowY: "scroll",
            }}
            p={3}
            spacing={3}
          >
            <Message  />
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default StarredMessages;


  
  