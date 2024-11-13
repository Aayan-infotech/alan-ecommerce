import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import banner from "../../assets/contact.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookAppointment = ({ open, handleClose }) => {
  const [appointmentFormsValue, setAppointmentFormsValue] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentFormsValue({ ...appointmentFormsValue, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };

  const validateForm = () => {
    const newErrors = {};
    if (!appointmentFormsValue.fullName) newErrors.fullName = "Full name is required";
    if (!appointmentFormsValue.email) newErrors.email = "Email is required";
    if (!appointmentFormsValue.mobile) newErrors.mobile = "Mobile number is required";
    if (!appointmentFormsValue.message) newErrors.message = "Message is required";
    if (!appointmentFormsValue.date) newErrors.date = "Date is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://44.196.192.232:5000/api/appointments/create",
        appointmentFormsValue
      );
      if (response.data.success) {
        toast.success(response.data.message, { autoClose: 1000 });
        setAppointmentFormsValue({
          fullName: "",
          email: "",
          mobile: "",
          message: "",
          date: "",
        });
      }
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="doors-container px-3 mb-4">
      <ToastContainer />
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
              <Box className="mb-4">
                <InputLabel className="mb-2">Full Name</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleInputChange}
                    value={appointmentFormsValue.fullName}
                    name="fullName"
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </FormControl>
              </Box>
              <Box className="mb-4">
                <InputLabel className="mb-2">Email</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleInputChange}
                    value={appointmentFormsValue.email}
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} className="text-start">
              <Box className="mb-4">
                <InputLabel className="mb-2">Mobile</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleInputChange}
                    value={appointmentFormsValue.mobile}
                    name="mobile"
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                  />
                </FormControl>
              </Box>
              <Box className="mb-4">
                <InputLabel className="mb-2">Message</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleInputChange}
                    value={appointmentFormsValue.message}
                    name="message"
                    multiline
                    error={!!errors.message}
                    helperText={errors.message}
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} className="text-start">
              <Box className="mb-4">
                <InputLabel className="mb-2">Date</InputLabel>
                <FormControl fullWidth>
                  <TextField
                    onChange={handleInputChange}
                    value={appointmentFormsValue.date}
                    type="date"
                    inputProps={{ min: new Date().toISOString().split("T")[0] }}
                    name="date"
                    error={!!errors.date}
                    helperText={errors.date}
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>

          <Box className="text-center">
            <Button
              variant="contained"
              sx={{ textTransform:"none" }}
              onClick={handleSubmit}
            >
              Schedule An Appointment
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
