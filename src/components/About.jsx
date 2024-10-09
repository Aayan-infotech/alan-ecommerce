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
import banner from "../../src/assets/contact.png";
import card_img1 from "../../src/assets/image 1.png";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
import { Link, useLocation } from "react-router-dom";

export const About = () => {
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
            About Us
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
            <Grid item xs={4}>
              <img src={card_img1} height="300" />
            </Grid>
            <Grid item xs={8} className="text-start">
              <Typography>
                Discount Door and Window (DDW) is dedicated to providing the
                lowest cost retrofit doors and windows on the market today. DDW
                accomplishes this by working with well established wholesalers,
                keeping overhead costs down to a minimum, and passing on the
                savings to you. DDW's goal is to make buying doors and windows
                easier and more affordable than ever before by utilizing the
                internet as a store front.
              </Typography>
              <br/>
              <Typography>
                Discount Door and Window (DDW) is dedicated to providing the
                lowest cost retrofit doors and windows on the market today. DDW
                accomplishes this by working with well established wholesalers,
                keeping overhead costs down to a minimum, and passing on the
                savings to you. DDW's goal is to make buying doors and windows
                easier and more affordable than ever before by utilizing the
                internet as a store front.
              </Typography>
              <br/>
              <Typography>
                Discount Door and Window (DDW) is dedicated to providing the
                lowest cost retrofit doors and windows on the market today. DDW
                accomplishes this by working with well established wholesalers,
                keeping overhead costs down to a minimum, and passing on the
                savings to you.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mt-4">
            <Grid item xs={12} className="text-start">
              Discount Door and Window (DDW) is dedicated to providing the
              lowest cost retrofit doors and windows on the market today. DDW
              accomplishes this by working with well established wholesalers,
              keeping overhead costs down to a minimum, and passing on the
              savings to you. DDW's goal is to make buying doors and windows
              easier and more affordable than ever before by utilizing the
              internet as a store front.
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
