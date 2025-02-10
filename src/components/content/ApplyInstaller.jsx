import React, { useState } from "react";
import content from "../../json/doors.json";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import question_installer from "../../assets/question_installer.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";

const ApplyInstaller = () => {
  const { questions_installer } = content;
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
        "http://44.196.64.110:3000/api/user/profile",
        selectedOptions
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  return (
    <Container sx={{ mt: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        className="fw-bold"
        sx={{
          fontSize: { xs: "1.8rem", md: "2.125rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Apply to Become a Pre-Approved Installer
      </Typography>

      <Grid container spacing={2} maxWidth={700}>
        <Grid item xs={12} sm={6} md={6}>
          <Box className="mb-3">
            <InputLabel className="fw-bold text-black mb-2">Name</InputLabel>
            <FormControl fullWidth>
              <TextField
                name="first_name"
                value={selectedOptions.first_name}
                onChange={handleInputChange}
                variant="outlined"
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
            <InputLabel className="fw-bold text-black mb-2">Phone #</InputLabel>
            <FormControl fullWidth>
              <TextField
                name="email"
                value={selectedOptions.email}
                onChange={handleInputChange}
                variant="outlined"
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
              Subscribe to Newsletter 
            </InputLabel>
            <FormControl fullWidth>
              <TextField
                name="email"
                value={selectedOptions.email}
                onChange={handleInputChange}
                variant="outlined"
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
            <InputLabel className="fw-bold text-black mb-2">Email</InputLabel>
            <FormControl fullWidth>
              <TextField
                name="last_name"
                value={selectedOptions.last_name}
                onChange={handleInputChange}
                variant="outlined"
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
              Zip Code or City
            </InputLabel>
            <FormControl fullWidth>
              <TextField
                name="phone_no"
                value={selectedOptions.phone_no}
                onChange={handleInputChange}
                variant="outlined"
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
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="gilad"
                      className="p-3"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          backgroundColor: "#D0E5F4",
                          fontSize: 40,
                        },
                      }}
                    />
                  }
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <span style={{ marginRight: "8px" }}>
                        Subscribe to Newsletter
                      </span>
                    </Box>
                  }
                  labelPlacement="start"
                />
              </FormGroup>
            </FormControl>
          </Box>
          <Box sx={{ mt: 4 }} className="text-center">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC5F03" }}
              className="w-100 p-3 rounded-3 fw-bold w-50"
              onClick={handleSubmit}
            >
              Get an Installer
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplyInstaller;
