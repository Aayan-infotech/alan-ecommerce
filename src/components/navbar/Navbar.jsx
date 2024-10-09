import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import { BookAppointment } from "../bookAppointment/BookAppointment";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      color="default"
      className="navbar-content"
      sx={{
        maxWidth: "1200px",
        margin: "20px auto 0",
        padding: "6px",
        width: "100%",
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography
            variant="h4"
            component="div"
            className="discount-heading mb-0"
          >
            Discount
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontSize: "17px",
              color: "#0068B3",
              fontWeight: "bold",
              lineHeight: "0.75",
            }}
          >
            Doors & Windows
          </Typography>
        </Box>

        {/* Middle Section: Navigation Links */}
        <Link to="/">
          <Button color="inherit" className="nav-title">
            Home
          </Button>
        </Link>
        <Link to="/doors">
          <Button color="inherit" className="nav-title">
            Doors
          </Button>
        </Link>
        <Link to="/windows">
          <Button color="inherit" className="nav-title">
            Windows
          </Button>
        </Link>
        <Link to="/hardware-products">
          <Button color="inherit" className="nav-title">
            Hardware Products
          </Button>
        </Link>
        <Link to="/new-collection">
          <Button color="inherit" className="nav-title">
            New Collection
          </Button>
        </Link>

        {/* Right Section: Icons and Button */}
        <IconButton color="inherit">
          <SearchIcon sx={{ color: "#fc5f03" }} />
        </IconButton>
        <Link to="/cart">
          <IconButton color="inherit">
            <ShoppingCartIcon sx={{ color: "#fc5f03" }} />
          </IconButton>
        </Link>
        <IconButton color="inherit">
          <FavoriteBorderIcon sx={{ color: "#fc5f03" }} />
        </IconButton>
        <Link to="/contact">
          <IconButton
            color="inherit"
            sx={{
              backgroundColor: "#fc5f03",
              borderRadius: "50%",
              padding: "5px",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
            className="me-4"
          >
            <PhoneIcon className="fs-6" sx={{ color: "white" }} />
          </IconButton>
        </Link>
        <Link to="/appointment">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fc5f03",
              fontWeight: "bold",
              fontSize: "10px",
            }}
            // onClick={handleClickOpen}
          >
            Book a Free Consultation
          </Button>
        </Link>
        {/* <BookAppointment open={open} handleClose={handleClose} /> */}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar