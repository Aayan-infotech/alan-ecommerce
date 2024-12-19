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
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const categoryId = localStorage.getItem("windowCategoryId");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      className="navbar-content rounded-3"
      sx={{
        maxWidth: "1200px",
        margin: "20px auto 0",
        padding: "6px",
        width: "100%",
        top: "0",
        zIndex: "999",
      }}
    >
      <Toolbar sx={{ position: "sticky", top: "0", zIndex: "999" }}>
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "auto" }}
            />
          </Link>
        </Box>
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{ sx: { width: "250px", borderRadius: "10px" } }}
            >
              <Link
                to="/"
                onClick={handleMenuClose}
                className="text-black text-decoration-none"
              >
                <MenuItem>Home</MenuItem>
              </Link>
              <Link
                to="/doors"
                onClick={handleMenuClose}
                className="text-black text-decoration-none"
              >
                <MenuItem>Products</MenuItem>
              </Link>
              <Link
                to="/windows"
                onClick={handleMenuClose}
                className="text-black text-decoration-none"
              >
                <MenuItem>Installation Guide</MenuItem>
              </Link>
              <Link
                to="/hardware-products"
                onClick={handleMenuClose}
                className="text-black text-decoration-none"
              >
                <MenuItem>DIY Guide</MenuItem>
              </Link>
              <Link
                to="/new-collection"
                onClick={handleMenuClose}
                className="text-black text-decoration-none"
              >
                <MenuItem>New Collection</MenuItem>
              </Link>
              {/* <Box className="ms-2">
              <Button variant="contained" size="small" className="me-2"> Small </Button>
              <Button variant="contained" size="small"> Small </Button>
              </Box> */}
            </Menu>
          </>
        )}
        {!isMobile && (
          <>
            <Link className="text-decoration-none" to="/">
              <Button color="inherit" className="nav-title">
                Home
              </Button>
            </Link>
            {/* <Link className="text-decoration-none" to="/doors">
              <Button color="inherit" className="nav-title" dropdown-toggle>
                Products
              </Button>
            </Link> */}
            <div className="dropdown">
              <Button
                color="inherit"
                className="nav-title"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </Button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="text-decoration-none"
                    to={`/categories/${categoryId}`}
                  >
                    <button className="dropdown-item" type="button">
                      Window
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/doorscategorytypes">
                    <button className="dropdown-item" type="button">
                      Doors
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none" to="/doors">
                    <button className="dropdown-item" type="button">
                      Hardware
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <Link className="text-decoration-none" to="/windows">
              <Button color="inherit" className="nav-title">
                Installation Guide
              </Button>
            </Link>
            <Link className="text-decoration-none" to="/diyinstall-guides">
              <Button color="inherit" className="nav-title">
                DIY Guide
              </Button>
            </Link>
          </>
        )}

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
            <Link to="/cart">
              <IconButton
                color="inherit"
                className="me-3"
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
            <Link to="/appointment">
              <Button
                variant="contained"
                className="me-3"
                sx={{
                  backgroundColor: "#0068B3",
                  fontWeight: "bold",
                  fontSize: "12px",
                  textTransform: "none",
                }}
              >
                Book an Appointment
              </Button>
            </Link>
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
                className="me-2"
              >
                <PhoneIcon className="fs-6" sx={{ color: "white" }} />
              </IconButton>
            </Link>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                color: "#FC5F03",
                fontWeight: "bold",
              }}
            >
              (800) 995 - 9965
            </Typography>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
