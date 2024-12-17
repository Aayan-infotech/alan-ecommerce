import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  InputLabel,
  FormControl,
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
  const contactInfo = [
    {
      icon: <AddLocationIcon className="me-4" />,
      title: "Address",
      details: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      icon: <CallIcon className="me-4" />,
      title: "Phone",
      details: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789",
    },
  ];

  const formFields = [
    { label: "Your Name", placeholder: "Enter your name" },
    { label: "Email Address", placeholder: "Enter your email" },
    { label: "Mobile No.", placeholder: "Enter your mobile number" },
    { label: "Message", placeholder: "Type your message...", isTextarea: true },
  ];

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
          <Typography
            variant="h2"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.2rem" },
            }}
          >
            Home {">"} {formatPath(location.pathname)}
          </Typography>
        </Box>
      </Box>
      <Container className="mt-4">
        <Box className="text-center d-flex flex-column align-items-center">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Get In Touch With Us
          </Typography>
          <Typography
            sx={{
              width: { xs: "100%", md: "50%" },
              color: "gray",
              textAlign: "center",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            For more information about our product & services, please feel free
            to drop us an email. Our staff is always here to help you. Do not
            hesitate!
          </Typography>

          <Grid container spacing={2} className="mt-4">
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: 250,
                      display: "flex",
                      mb: 4,
                    }}
                  >
                    {info.icon}
                    <Box className="text-start">
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "black" }}
                      >
                        {info.title}
                      </Typography>
                      <Typography sx={{ color: "black", fontSize: "0.9rem" }}>
                        {info.details}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {formFields.map((field, index) => (
                <Box className="mb-3" key={index}>
                  <InputLabel
                    sx={{
                      fontWeight: "bold",
                      color: "black",
                      mb: 1,
                      textAlign:"left"
                    }}
                  >
                    {field.label}
                  </InputLabel>
                  <FormControl fullWidth>
                    {field.isTextarea ? (
                      <TextareaAutosize
                        minRows={3}
                        className="p-2"
                        placeholder={field.placeholder}
                        style={{
                          borderRadius: "5px",
                          border: "1px solid lightgray",
                          fontFamily: "inherit",
                        }}
                      />
                    ) : (
                      <TextField placeholder={field.placeholder} />
                    )}
                  </FormControl>
                </Box>
              ))}
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "#1976D2",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
