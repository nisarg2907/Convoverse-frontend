import { faker } from '@faker-js/faker';
import { Stack, Box, useTheme, IconButton, Typography, Avatar, Divider } from '@mui/material'
import { Bell, CaretLeft, Image, Info, Key, Keyboard, Lock, Note, PencilCircle } from 'phosphor-react';
import React from 'react'
import Shortcuts from '../../sections/settings/Shortcuts';

const Settings = () => {
    const theme = useTheme();
    const [openShortcuts,setOpenShortcuts] = React.useState(false);
    const handleOpenShortcuts = ()=>{
        setOpenShortcuts(true);
    }
    const handleCloseShortcuts =()=>{
        setOpenShortcuts(false);
    }
    const list = [
        {
            key:0,
            icon: <Bell size={20}/>,
            title: "Notifications",
            onClick: ()=>{},
        },
        {
            key:1,
            icon: <Lock size={20}/>,
            title: "Privacy",
            onClick: ()=>{},
        },
        {
            key:2,
            icon: <Key size={20}/>,
            title: "Security",
            onClick: ()=>{},
        },
        {
            key:3,
            icon: <PencilCircle size={20}/>,
            title: "Theme",
            onClick: ()=>{},
        },
        {
            key:4,
            icon: <Image size={20}/>,
            title: "Chat WallPaper",
            onClick: ()=>{},
        },
        {
            key:5,
            icon: <Note size={20}/>,
            title: "Request Acces Info",
            onClick: ()=>{},
        },
        {
            key:6,
            icon: <Keyboard size={20}/>,
            title: "KeyBoard Shortcuts",
            onClick: handleOpenShortcuts,
        },
        {
            key:7,
            icon: <Info size={20}/>,
            title: "Help",
            onClick: ()=>{},
        },
    ]


  return (
    
        <Stack direction={"row"} sx={{width: "100%"}}>
            {/* leftpanel */}
            <Box sx={{height:"100vh",width: 320,backgroundColor: theme.palette.mode === "light"? "#F8FAFF": theme.palette.background,overflowY:"auto" ,boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"}} >
                    <Stack p={4} spacing={5}>
                        {/* header */}
                        <Stack direction={"row"} alignItems={"center"} spacing={3}>
                              <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"}/>
                              </IconButton>
                              <Typography variant="h6">
                                Settings
                              </Typography>
                        </Stack>
                      {/* profile  */}
                      <Stack direction={"row"} alignItems={"center"} spacing={3}>
                        <Avatar sx={{width: 56 ,height: 56}} src={faker.image.avatar()} alt={faker.name.firstName()}/>
                        <Stack spacing={0.5}>
                             <Typography variant="article">{faker.name.fullName()}</Typography>
                             <Typography variant="body2">{faker.random.words()}</Typography>
                        </Stack>
                      </Stack>
                    {/* list of options */}
                    <Stack spacing={4}>
                        {list.map(({key,icon,title,onClick})=>{
                             return <>
                             <Stack spacing={2} sx={{cursor: 'pointer'}} key={key} onClick={onClick}>
                                     <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                           {icon}
                                            <Typography variant="body2">{title}</Typography>
                                     </Stack>
                                     {key!==7 && <Divider/> }
                             </Stack>
                             
                             </>     
                        })}

                    </Stack>

                    </Stack>
            </Box>
            {/* right panel */}
           {openShortcuts && <Shortcuts open={openShortcuts}    handleClose={handleCloseShortcuts}/ >}
        </Stack>
    
  )
}

export default Settings
