import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeContext from "../context";
import { useContext } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Badge from "@mui/material/Badge";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function DrawerAppBar(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const themed = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  function handlecart() {
    navigate("/cart");
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleTheme = () => {
    if (theme !== "dark") {
      return setTheme("dark");
    } else {
      return setTheme("light");
    }
  };
  const data = [
    "Welcome",
    "SignUP",
    "Login",
    "Home",
    "Details",
    "Buy",
    "Feedback",
  ];
  const navigate = useNavigate();
  const bar = (text) => {
    switch (text) {
      case "Welcome":
        navigate("/");
        break;
      case "SignUP":
        navigate("/signup");
        break;
      case "Login":
        navigate("/login");
        break;
      case "Home":
        navigate("/home");
        break;
      case "Details":
        navigate("/details");
        break;
      case "Buy":
        navigate("/buy");
        break;
      case "Feedback":
        navigate("/feedback");
        break;
      default:
        navigate("/");
        break;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </Stack>

          <Badge
            badgeContent={props.COUNTING}
            sx={{ display: "flex", marginLeft: "72rem" }}
            color="primary"
          >
            <i
              style={{ fontSize: 20, fontWeight: "300", padding: "10px" }}
              onClick={handleTheme}
              class="fa-sharp fa-regular fa-lightbulb"
            ></i>
            <i
              class="fa-solid fa-cart-shopping"
              onClick={handlecart}
              style={{ padding: "12px" }}
            ></i>
          </Badge>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {data.map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => bar(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
