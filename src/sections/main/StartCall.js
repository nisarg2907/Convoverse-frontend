import React from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const StartCall = ({ open, handleClose }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
    >
      <DialogTitle sx={{ mb: 3 }}>Make a call</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
        <Stack sx={{ width: "100%" }} >
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
        {/* call list */}
        {MembersList.map((el)=>{
            return <CallElement {...el}/>
        })}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
