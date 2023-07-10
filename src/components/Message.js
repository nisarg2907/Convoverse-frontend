import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./Conversation/MsgTypes";

const Message = () => {
    return (
      <Box p={3}>
        <Stack spacing={3}>
          {Chat_History.map((el) => {
            switch (el.type) {
              case "divider":
                return <TimeLine el={el} />;
  
              case "msg":
                switch (el.subtype) {
                  case "img":
                    return <MediaMsg {...el} />; // Use spread operator to pass the `el` object as props
  
                  case "doc":
                    return <DocMsg {...el}/>;
                  case "link":
                    return <LinkMsg {...el}/>
                  case "reply":
                    return <ReplyMsg {...el}/>
  
                  default:
                    return <TextMsg el={el} />;
                }
                
  
              default:
                return <></>;
            }
          })}
        </Stack>
      </Box>
    );
  };
  

export default Message;
