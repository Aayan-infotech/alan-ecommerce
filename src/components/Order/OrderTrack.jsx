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

export const OrderTrack = () => {
  return (
    <div>
      <Container sx={{ mt: 5, mb: 4 }} className="text-center">
        <Typography variant="h4" align="center" className="fw-bold text-black">
          Track Your Order
        </Typography>
        <Typography variant="body4" align="center" className="text-black mt-2">
          for tracking the order you need to enter Order ID
        </Typography>

        <Box className="mt-4">
          {/* <FormControl> */}
          <InputLabel className="text-black fw-bold">Order ID</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter Order ID"
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
          {/* </FormControl> */}
        </Box>

        {/* Button */}
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
              Track Order
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
