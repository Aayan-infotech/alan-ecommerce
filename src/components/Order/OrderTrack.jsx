import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const OrderTrack = () => {
  return (
    <div>
      <Container
        sx={{
          mt: { xs: 2, md: 5 },
          mb: { xs: 3, md: 4 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: { xs: "1.8rem", md: "2.2rem" }, 
            }}
          >
            Track Your Order
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mt: 1,
              color: "black",
              fontSize: { xs: "0.9rem", md: "1rem" }, 
            }}
          >
            For tracking the order, you need to enter your Order ID.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <InputLabel
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Order ID
            </InputLabel>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter Order ID"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: "#D0E5F4",
                borderRadius: "10px",
                "& fieldset": {
                  border: "none", 
                },
              }}
            />
          </Box>
          <Box sx={{ textAlign: "center", mt: 3 }}>
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
                  fontSize: { xs: "1rem", md: "1.1rem" },
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
