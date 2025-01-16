import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../toastMessage/Toast";
import Cookies from "js-cookie";

export const Login = () => {
  const [btnLoader, setBtnLoader] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      const response = await axios.post(
        "http://44.196.64.110:7878/api/CustMng/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response?.status === 200 && response?.data?.success) {
        setSnackbarMessage(response?.data?.message || "Login successful");
        setOpenSnackbar(true);
        Cookies.set("isLoggedIn", "true");
        Cookies.set("user", JSON.stringify(response?.data?.customer));
        navigate("/measured-windows");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Login failed";
      setSnackbarMessage(errorMessage);
      setOpenSnackbar(true);
    } finally {
      setBtnLoader(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Container
        sx={{
          mt: { xs: 3, md: 5 },
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "80%", md: "400px" } }}>
          <Typography
            variant="h4"
            align="center"
            className="fw-bold text-black"
            sx={{ fontSize: { xs: "1.8rem", md: "2.125rem" } }}
          >
            Login
          </Typography>
          <Box className="mt-4">
            <InputLabel
              className="text-black fw-bold"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              Email
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                mt: 1,
                width: "100%",
                backgroundColor: "#D0E5F4",
                borderRadius: "10px",
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box className="mt-4">
            <InputLabel
              className="text-black fw-bold"
              sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              Password
            </InputLabel>
            <TextField
              id="outlined-basic"
              type="password"
              variant="outlined"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                mt: 1,
                width: "100%",
                backgroundColor: "#D0E5F4",
                borderRadius: "10px",
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box className="text-center mt-3">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="w-100"
              sx={{
                backgroundColor: "#1C4E9B",
                textTransform: "capitalize",
                fontWeight: "bold",
              }}
              onClick={handleLogin}
            >
              {btnLoader ? (
                <span>
                  <i className="fa-solid fa-spinner"></i>
                  Logging...
                </span>
              ) : (
                "Login"
              )}
            </Button>
            <Typography variant="body1" className="mt-2">
              Doesn't have an account?&nbsp;
              <Link to="/customer-register">Sign up</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};
