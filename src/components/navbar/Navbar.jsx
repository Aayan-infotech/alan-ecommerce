import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [exploreCategories, setExploreCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const categoryId = localStorage.getItem("windowCategoryId");
  const navigate = useNavigate();

  const fetchExploreCategories = async () => {
    try {
      const response = await axios.get(
        "http://44.196.64.110:7878/api/categories/getAllCategories"
      );
      console.log(response?.data?.data, "hgsdajkfasd");
      if (response?.data?.status === 200) {
        setExploreCategories(response?.data?.data);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error?.response?.data?.message || "An error occurred.");
    }
  };

  useEffect(() => {
    fetchExploreCategories();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (category) => {
    if (!category?.isSubCategory) {
      navigate(`/allsubproducts/${category?._id}`, {
        state: { categorydetails: category },
      });
    } else {
      navigate(`/categories/${category?._id}`);
    }
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
                {exploreCategories.length > 0 ? (
                  exploreCategories.map((category) => (
                    <li
                      key={category._id}
                      onClick={() => handleClick(category)}
                    >
                      {/* <Link
                        className="text-decoration-none"
                        to={`/categories/${category._id}`}
                      > */}
                      <button className="dropdown-item" type="button">
                        {category.name}
                      </button>
                      {/* </Link> */}
                    </li>
                  ))
                ) : (
                  <li className="dropdown-item">No categories available</li>
                )}
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
            {/* <Link to="/profile"> */}
            <IconButton
              color="inherit"
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <AccountCircleIcon sx={{ color: "#fc5f03" }} />
            </IconButton>
            {/* </Link> */}
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
