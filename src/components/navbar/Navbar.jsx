import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu"; // Import the menu icon
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
        {/* Heading Section */}
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

        {/* Mobile Menu Icon */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <Link to="/" onClick={handleMenuClose}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/doors" onClick={handleMenuClose}>
                <MenuItem>Doors</MenuItem>
              </Link>
              <Link to="/windows" onClick={handleMenuClose}>
                <MenuItem>Windows</MenuItem>
              </Link>
              <Link to="/hardware-products" onClick={handleMenuClose}>
                <MenuItem>Hardware Products</MenuItem>
              </Link>
              <Link to="/new-collection" onClick={handleMenuClose}>
                <MenuItem>New Collection</MenuItem>
              </Link>
            </Menu>
          </>
        )}

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <>
            <Link className="text-decoration-none" to="/">
              <Button color="inherit" className="nav-title">
                Home
              </Button>
            </Link>
            <Link className="text-decoration-none" to="/doors">
              <Button color="inherit" className="nav-title">
                Doors
              </Button>
            </Link>
            <Link className="text-decoration-none" to="/windows">
              <Button color="inherit" className="nav-title">
                Windows
              </Button>
            </Link>
            <Link className="text-decoration-none" to="/hardware-products">
              <Button color="inherit" className="nav-title">
                Hardware Products
              </Button>
            </Link>
            <Link className="text-decoration-none" to="/new-collection">
              <Button color="inherit" className="nav-title">
                New Collection
              </Button>
            </Link>
          </>
        )}

        {/* Right Section: Icons and Button */}
        {!isMobile && (
          <>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <SearchIcon sx={{ color: "#fc5f03" }} />
            </IconButton>
            <Link to="/cart">
              <IconButton
                color="inherit"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon sx={{ color: "#fc5f03" }} />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <FavoriteBorderIcon sx={{ color: "#fc5f03" }} />
            </IconButton>
            <Link to="/contact">
              <IconButton
                sx={{
                  backgroundColor: "#0068B3",
                  borderRadius: "50%",
                  padding: "5px",
                  "&:hover": {
                    backgroundColor: "#0068B3",
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
                  backgroundColor: "#0068B3",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Book a Free Consultation
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
