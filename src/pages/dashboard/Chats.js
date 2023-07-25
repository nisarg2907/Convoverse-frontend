import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import { styled, useTheme } from "@mui/material/styles";

import { Badge } from "@mui/material";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import StyledInputBase from "../../components/Search/StyledInputBase";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";

const Chats = () => {
  const [openDialog,setOpenDialog] = React.useState(false);
  const theme = useTheme();

  const handleCloseDialog = () =>{
    setOpenDialog(false);
  };

  const handleOpenDialog = ()=>{
    setOpenDialog(true);
  };
  return (
    <>
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0 0 0 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>

          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <IconButton onClick={()=>{
              handleOpenDialog();
            }}>
              <Users />
            </IconButton>
            <IconButton>
              <CircleDashed />
            </IconButton>
          </Stack>
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

        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archieved</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            overflowX: "hidden",
            height: "100%",
            "&::-webkit-scrollbar": { display: "none" },
            "&:hover::-webkit-scrollbar": { display: "none" },
          }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>

            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
    {openDialog && <Friends open={openDialog} handleClose={handleCloseDialog} />}
    </>
  );
};

export default Chats;
