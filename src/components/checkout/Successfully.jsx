import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import successfully from "../../assets/successfully.png";
import { Link } from "react-router-dom";

export const Successfully = () => {
  return (
    <div>
      <Container sx={{ mt: 5, mb: 4 }}>
        <Typography variant="h4" align="center" className="fw-bold text-black">
          Payment Successful
        </Typography>
        <Box className="text-center">
          <img src={successfully} height={150} />
        </Box>
        <Typography variant="h4" align="center" className="fw-bold text-black">
          Your Payment have been successful!
        </Typography>
        <Box className="text-center mt-3">
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "150px" }}
              className="fw-bold text-capitalize me-2"
            >
              Home
            </Button>
          </Link>
          {/* <Link to="/orders">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "150px" }}
              className="fw-bold text-capitalize"
            >
              Orders
            </Button>
          </Link> */}
        </Box>
      </Container>
    </div>
  );
};
