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
            <Link to="/traking-order">
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  width: { xs: "100%", sm: "150px" }, 
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
