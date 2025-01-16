import React, { useState } from "react";
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
  FormHelperText,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    full_name: "",
    email: "",
    password: "",
    mobile_number: "",
    address: "",
    state: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!selectedOptions.full_name)
      newErrors.full_name = "Full name is required";
    if (!selectedOptions.password) newErrors.password = "Full name is required";
    if (!selectedOptions.email || !/\S+@\S+\.\S+/.test(selectedOptions.email))
      newErrors.email = "Valid email is required";
    if (
      !selectedOptions.mobile_number ||
      !/^\d{10}$/.test(selectedOptions.mobile_number)
    )
      newErrors.mobile_number = "Mobile number must be 10 digits";
    if (!selectedOptions.address) newErrors.address = "Address is required";
    if (!selectedOptions.password) newErrors.password = "Password is required";
    if (!selectedOptions.state) newErrors.state = "State is required";
    if (!selectedOptions.zipCode || !/^\d{5}$/.test(selectedOptions.zipCode))
      newErrors.zipCode = "Zip code must be 5 digits";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const payload = {
        full_name: selectedOptions.full_name,
        email: selectedOptions.email,
        password: selectedOptions.password,
        mobile_number: selectedOptions.mobile_number,
        address: selectedOptions.address,
        state: selectedOptions.state,
        zipCode: selectedOptions.zipCode,
      };

      const response = await axios.post(
        "http://44.196.64.110:5000/api/personalDetails/create",
        payload
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        setSelectedOptions({
          full_name: "",
          email: "",
          password: "",
          mobile_number: "",
          address: "",
          state: "",
          zipCode: "",
        });
      }
    } catch (error) {
      console.error("Error updating profile", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="doors-container px-3">
      <Container className="mt-4 d-flex justify-content-center align-items-center mb-4">
        <Grid container spacing={2} className="w-75">
          <Grid item xs={12} sm={6} md={6}>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Full Name
              </InputLabel>
              <FormControl fullWidth error={Boolean(errors.full_name)}>
                <TextField
                  name="full_name"
                  value={selectedOptions.full_name}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Full Name"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.full_name && (
                  <FormHelperText error>{errors.full_name}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">Email</InputLabel>
              <FormControl fullWidth error={Boolean(errors.email)}>
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
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.email && (
                  <FormHelperText error>{errors.email}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Password
              </InputLabel>
              <FormControl fullWidth error={Boolean(errors.password)}>
                <TextField
                  name="password"
                  type="password"
                  value={selectedOptions.password}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Enter Password"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.password && (
                  <FormHelperText error>{errors.password}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Zip Code
              </InputLabel>
              <FormControl fullWidth error={Boolean(errors.zipCode)}>
                <TextField
                  name="zipCode"
                  value={selectedOptions.zipCode}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Zip Code"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.zipCode && (
                  <FormHelperText error>{errors.zipCode}</FormHelperText>
                )}
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Mobile No.
              </InputLabel>
              <FormControl fullWidth error={Boolean(errors.mobile_number)}>
                <TextField
                  name="mobile_number"
                  value={selectedOptions.mobile_number}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="Mobile No."
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.mobile_number && (
                  <FormHelperText error>{errors.mobile_number}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">
                Address
              </InputLabel>
              <FormControl fullWidth error={Boolean(errors.address)}>
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
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.address && (
                  <FormHelperText error>{errors.address}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box className="mb-3">
              <InputLabel className="fw-bold text-black mb-2">State</InputLabel>
              <FormControl fullWidth error={Boolean(errors.state)}>
                <TextField
                  name="state"
                  value={selectedOptions.state}
                  onChange={handleInputChange}
                  variant="outlined"
                  placeholder="State"
                  sx={{
                    backgroundColor: "#D0E5F4",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": { border: "none" },
                  }}
                />
                {errors.state && (
                  <FormHelperText error>{errors.state}</FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Button
                variant="contained"
                className="w-100 p-2"
                onClick={handleSubmit}
              >
                Next <ArrowForwardIcon className="fs-5" />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Profile;
