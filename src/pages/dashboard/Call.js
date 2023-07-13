import {
  Box,
  Stack,
  Typography,
  Link,
  IconButton,
  useTheme,
  Divider,
} from "@mui/material";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { MagnifyingGlass, Plus } from "phosphor-react";
import React,{useState} from 'react'
import { CallElement, CallLogElement } from "../../components/CallElement";
import { CallLogs } from "../../data";
import StartCall from "../../sections/main/StartCall";

const Call = () => {
  const [openDialog,setOpenDialog] = useState(false);
  const theme = useTheme();

  const handleCLoseDialog=()=>{
    setOpenDialog(false);
  }

  const handleOpenDialog=()=>{
    setOpenDialog(true);
  }

  return (
    <>
    <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.1)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Call Logs</Typography>
            </Stack>

            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto", height: "100%" ,"&::-webkit-scrollbar": { display: "none" }, "&:hover::-webkit-scrollbar": { display: "none" } }}>
              <Stack spacing={2.5}>
                <Typography variant="subtitle2" sx={{ color: "#676667" }}>
                 </Typography>
                 {/* call logs */}
                {CallLogs.map((el)=>{
                   return <CallLogElement  {...el}/>
                })}
            </Stack>

              


            </Stack>
          </Stack>
        </Box>

        {/* right */}
        {/* implement conversation component */}
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCLoseDialog}/>}
      </>
  )
}

export default Call
