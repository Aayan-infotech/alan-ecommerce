import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import banner from "../../assets/contact.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import { Link, useLocation } from "react-router-dom";

export const BookAppointment = ({ open, handleClose }) => {
  const location = useLocation();
  const formatPath = (path) => {
    const specialMappings = {
      "book a free consultant": "Book A Free Consultant",
    };
    return path
      .split("/")
      .filter(Boolean)
      .map((segment) => {
        const formattedSegment =
          specialMappings[segment] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());
        return formattedSegment;
      })
      .join(" > ");
  };

  return (
    <div className="doors-container px-3 mb-4">
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h2" className="text-black fw-bold">
            Book A Free Consultant
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container className="mt-4">
        <Box className="text-center d-flex flex-column align-items-center">
          <Typography
            variant="h4"
            align="center"
            className="fw-bold text-black"
          >
            Expert Advice, Tailored for You
          </Typography>
          <Typography
            className="w-50 text-secondary text-center"
            sx={{ fontSize: "15px" }}
          >
            Connect with our experts for a personalized consultation at no cost.
            Get tailored insights and solutions designed to meet your unique
            needs.
          </Typography>

          <Grid container spacing={2} className="mt-4" sx={{ maxWidth: 900 }}>
            <Grid item xs={6} className="text-start">
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  First name <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField></TextField>
                </FormControl>
              </Box>
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Last name <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField></TextField>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} className="text-start">
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Email address <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField></TextField>
                </FormControl>
              </Box>
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Mobile no. <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField></TextField>
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Box className="text-center">
            <Button variant="contained" sx={{ width: "150px" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
