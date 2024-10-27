import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <Container
        sx={{
          mt: 5,
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            align="center"
            className="fw-bold text-black"
          >
            Login
          </Typography>
          <Box className="mt-4">
            <InputLabel className="text-black fw-bold">Email</InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Email"
              sx={{
                mt: 1,
                width: "300px",
                backgroundColor: "#D0E5F4",
                borderRadius: "10px",
                width: "400px",
                border: "none",
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box className="mt-4">
            <InputLabel className="text-black fw-bold">Password</InputLabel>
            <TextField
              id="outlined-basic"
              type="password"
              variant="outlined"
              placeholder="Enter Password"
              sx={{
                mt: 1,
                width: "400px",
                backgroundColor: "#D0E5F4",
                borderRadius: "10px",
                "& fieldset": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box className="text-center mt-3">
            <Link to="/traking-order">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  width: "150px",
                  backgroundColor: "#1C4E9B",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
