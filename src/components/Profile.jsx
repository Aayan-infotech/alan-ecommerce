import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    country: "",
    address: "",
    landmark: "",
  });

  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "United Kingdom",
    "Germany",
  ];

  const location = useLocation();

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ");
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        "http://localhost:3000/api/user/profile",
        selectedOptions
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <div className="doors-container px-3">
      <Container className="mt-4 d-flex justify-content-center align-items-center">
        <Grid container spacing={2} className="w-75">
          <Grid item xs={12} sm={6} md={6}>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                First Name
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="first_name"
                  value={selectedOptions.first_name}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter First Name"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">Email</InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="email"
                  value={selectedOptions.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Email"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Country
              </InputLabel>
              <FormControl fullWidth>
                <Select
                  name="country"
                  value={selectedOptions.country}
                  onChange={handleSelectChange}
                  displayEmpty
                  bottom
                  variant="outlined"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>Select Country</em>
                  </MenuItem>
                  {countries.map((country, index) => (
                    <MenuItem key={index} value={country}>
                      {country}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Landmark
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="landmark"
                  value={selectedOptions.landmark}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Landmark"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Last Name
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="last_name"
                  value={selectedOptions.last_name}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Last Name"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Mobile no.
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="phone_no"
                  value={selectedOptions.phone_no}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Mobile no."
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box className="mb-5">
              <InputLabel className="fw-bold text-black mb-2">
                Address
              </InputLabel>
              <FormControl fullWidth>
                <TextField
                  name="address"
                  value={selectedOptions.address}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Address"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                  }}
                />
              </FormControl>
            </Box>
            <Box sx={{ mt: 4 }}>
              <Link to="/checkout">
                <Button
                  variant="contained"
                  className="w-100 p-2"
                  onClick={handleSubmit}
                >
                  Next <ArrowForwardIcon className="fs-5" />
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
