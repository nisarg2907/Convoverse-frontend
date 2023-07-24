import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import {
  Stack,
  IconButton,
  Avatar,
  Divider,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import { Gear } from "phosphor-react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { faker } from "@faker-js/faker";
import Logo from "../../assets/Images/logo.ico";
import {  useNavigate } from "react-router-dom";

const getMenuPath = (i) => {
  switch (i) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      return "/auth/login";
    default:
      break;
  }
};

const getPath = (index) =>{
  switch (index) {
    case 0:
      return "/app"
      
      case 1:
        return "/group";

        case 2:
          return "/call";

          case 3:
            return "/settings";
  
    default:
      break;
  }
}


const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <div>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          alignItems={"center"}
          sx={{ height: "100%" }}
          justifyContent="space-between
          "
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt={"Chat applogo"} />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                      navigate(getPath(el.index));
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}

              <Divider sx={{ width: "48px", color: "#000" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton 
                  onClick={() => {
                    setSelected(3);
                    navigate(getPath(3));
                    
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar
              id="basic-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              src={faker.image.avatar()}
            />
            <Menu
  id="demo-positioned-menu"
  aria-labelledby="demo-positioned-button"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
  transformOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}
>
  <Stack spacing={1} px={1}>
    {Profile_Menu.map((el, idx) => (
      <MenuItem
        key={idx}
        onClick={() => {
          navigate(getMenuPath(idx));
          handleClose(); // Close the menu after navigating
        }}
      >
        <Stack
          sx={{ width: 100 }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <span>{el.title}</span>
          {el.icon}
        </Stack>
      </MenuItem>
    ))}
  </Stack>
</Menu>

          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default SideBar;
