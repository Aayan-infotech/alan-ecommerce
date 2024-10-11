import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";

export const RequestEstimation = () => {
  return (
    <div>
      <Container maxWidth="sm">
        <Box className="mt-4">
          <Grid container spacing={2} className="mt-4">
            <Grid item xs={12}>
              <Box className="mb-3">
                <InputLabel className="fw-bold mb-2 text-black">
                  Your Name
                </InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Your name"></TextField>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="mb-3">
                <InputLabel className="fw-bold mb-2 text-black">
                  Email Address
                </InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Email Address"></TextField>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="mb-3">
                <InputLabel className="fw-bold mb-2 text-black">
                  Mobile No.
                </InputLabel>
                <FormControl fullWidth>
                  <TextField placeholder="Mobile No"></TextField>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className="mb-3">
                <InputLabel className="fw-bold mb-2 text-black">
                  Message.
                </InputLabel>
                <FormControl fullWidth>
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={2}
                    fullWidth
                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center" }} className="mt-3">
            <Button
              variant="contained"
              className="me-3"
              sx={{ backgroundColor: "##0068B3" }}
            >
              Request Free Estimate
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
