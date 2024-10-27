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

const AccurateWindowMeasurements = () => {
  const { accurate_window_measurements } = content;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom className="fw-bold">
        {accurate_window_measurements.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box mt={2}>
            <img src={window_mesaure} alt="Guide 1" style={{ width: "100%" }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6} className="d-flex align-items-center">
          <Typography variant="body1" paragraph>
            {accurate_window_measurements.description}
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

        {/* <Grid item xs={12}>
          <Box sx={{ width: "100%", mt: 4 }}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img1} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle-text" bgcolor="orange">
                  <Typography variant="body2" color="white">
                    To get width: Open the window and measure from one side of
                    the frame to the other.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img2} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle-text" bgcolor="orange">
                  <Typography variant="body2" color="white">
                    Measure the height from top to bottom. Include the track if
                    it exists.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img2} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle-text" bgcolor="orange">
                  <Typography variant="body2" color="white">
                    Width & height dimensions for accurate measurement.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img1} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img2} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Box className="circle" component="img" src={card_img2} />
              </Grid>
            </Grid>
          </Box>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default AccurateWindowMeasurements;
