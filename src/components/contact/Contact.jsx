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

export const Contact = () => {
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
            Contact
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
            Get In Touch With Us
          </Typography>
          <Typography
            className="w-50 text-secondary text-center"
            sx={{ fontSize: "15px" }}
          >
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </Typography>

          <Grid container spacing={2} className="mt-4">
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Box
                  sx={{
                    maxWidth: 250,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className="mb-4"
                >
                  <AddLocationIcon className="me-4" />
                  <Box className="text-start">
                    <Typography variant="h6" className="fw-bold text-black">
                      Address
                    </Typography>
                    <Typography className="text-black">
                      236 5th SE Avenue, New York NY10000, United States
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    maxWidth: 250,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <CallIcon className="me-4" />
                  <Box className="text-start">
                    <Typography variant="h6" className="fw-bold text-black">
                      Phone
                    </Typography>
                    <Typography className="text-black">
                      Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} className="text-start">
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Your name <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField></TextField>
                </FormControl>
              </Box>
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Email address <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField ></TextField>
                </FormControl>
              </Box>
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Mobile no. <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextField ></TextField>
                </FormControl>
              </Box>
              <Box className="mb-3">
                <InputLabel className="fw-bold text-black">
                  Message <span style={{ fontSize: "10px" }}>(inch)</span>
                </InputLabel>
                <FormControl fullWidth>
                  <TextareaAutosize
                    minRows={2}
                    className="p-2"
                    placeholder="Type your message..."
                  />
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
