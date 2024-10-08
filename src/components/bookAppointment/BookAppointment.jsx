import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

export const BookAppointment = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          width: "600px",
          maxWidth: "100%",
        },
      }}
    >
      <DialogTitle>Book Appointment</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Your Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mobile No." variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={2}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "end" }} className="mt-3">
          <Button
            variant="contained"
            className="me-3"
            sx={{ backgroundColor: "#FC5F03" }}
          >
            Request Free Estimate
          </Button>
          <Button
            variant="outlined"
            sx={{ borderColor: "#FC5F03", color: "#FC5F03" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
