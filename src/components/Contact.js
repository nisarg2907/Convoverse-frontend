import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Slide, Typography } from "@mui/material";
import { Box, Stack, useTheme } from "@mui/material";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType, toggleSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({open, handleClose})=>{
  return(
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Block this contact</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
     Are you sure you want to block the contact
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
  );
}

const DeleteDialog = ({open, handleClose})=>{
  return(
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Delete this chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
     Are you sure you want to delete the chats?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
  );
}

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openBlock , setOpenBlock] = React.useState(false);
  const [openDelete , setOpenDelete] = React.useState(false);

  const handleCloseBlock = ()=>{
    setOpenBlock(false);
  }

  
  const handleDeleteBlock = ()=>{
    setOpenDelete(false);
  }
  
  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* header */}
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
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(toggleSidebar());
              }}
            >
              <X />
            </IconButton>
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
          <Stack alignItems={"center"} direction="row" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{
                height: 64,
                width: 64,
              }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="article" fontWeight={600}>
                +91 900 5159 898
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">
              My mind moves a mile a minute
            </Typography>
          </Stack>
          <Divider />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button
              onClick={() => {
                console.log("clicked")
                dispatch(UpdateSidebarType("SHARED"));
              }}
              endIcon={<CaretRight />}
            >
              102
            </Button>
          </Stack>

          <Stack direction="row" spacing={2} alignItems={"center"}>
            {[1, 2, 3].map((el) => {
              return (
                <Box>
                  <img src={faker.image.food()} alt={faker.name.fullName()} />
                </Box>
              );
            })}
            ;
          </Stack>

          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton onClick={()=>{
              dispatch(UpdateSidebarType("STARRED"))
            }} >
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <IconButton>
              <AntSwitch />
            </IconButton>
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack direction="row" spacing={2} alignItems={"center"}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding day and night</Typography>
              <Typography variant="caption"> owl,camel,horse,goat</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button  onClick ={()=>{
              setOpenBlock(true);
            }} fullWidth variant="outlined" startIcon={<Prohibit />}>
              Block
            </Button>
            <Button onClick={()=>{
              setOpenDelete(true);
            }} fullWidth variant="outlined" startIcon={<Trash />}>
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock}/>}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleDeleteBlock}/>}
    </Box>
  );
};

export default Contact;
