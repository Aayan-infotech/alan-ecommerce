import React from "react";
import content from "../../json/doors.json";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import window_mesaure from "../../assets/window_mesaure.png";
import card_img1 from "../../assets/doityourselfinstallguides 1.png";
import card_img2 from "../../assets/tape_measure200 2.png";

const AccurateDoorMeasurements = () => {
  const { accurate_door_measurements } = content;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom className="fw-bold">
        {accurate_door_measurements.title}
      </Typography>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box mt={2}>
            <img src={window_mesaure} alt="Guide 1" style={{ width: "100%" }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className="d-flex align-items-center">
          <Typography variant="body1" paragraph>
            {accurate_door_measurements.description}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            mt={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Box
              style={{ width: "100%", maxWidth: "500px", aspectRatio: "16/9" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Vhwytq_ghVo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid> */}
    </Container>
  );
};

export default AccurateDoorMeasurements;
