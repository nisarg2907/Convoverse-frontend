import React from "react";
import Chats from "./Chats";
import { Stack, Box, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);
  const open = sidebar.open;
  const type = sidebar.type;
  console.log(type);

  return (
    <>
      <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.default,
          }}
        >
          <Conversation />
        </Box>
        {open &&
          (() => {
            switch (type) {
              case "CONTACT":
                return <Contact />;
              case "STARRED":
                return <StarredMessages/>; // Add a return statement for "STARRED" case
              case "SHARED":
                return <SharedMessages />;
              default:
                return null; // Add a default return statement
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
