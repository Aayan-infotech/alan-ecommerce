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
import card_img1 from "../../assets/window_measure08.jpeg";
import card_img2 from "../../assets/window_measure04.jpeg";

const AccurateWindowMeasurements = () => {
  const { accurate_window_measurements } = content;

  return (
    <div className="mb-4">
      <Container sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom className="fw-bold">
          {accurate_window_measurements.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box mt={2}>
              <img
                src={window_mesaure}
                alt="Guide 1"
                style={{ width: "100%" }}
              />
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
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  aspectRatio: "16/9",
                }}
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
        </Grid>
      </Container>
      <div className="row gx-5">
        <div className="col-12 col-md-4">
          <img
            src={card_img2}
            style={{ clipPath: "circle()", marginLeft: "-8rem" }}
            alt="..."
          />
        </div>
        <div className="col-12 col-md-4 text-center">
          <img src={card_img2} style={{ clipPath: "circle()" }} alt="..." />
        </div>
        <div className="col-12 col-md-4 text-end">
          <img
            src={card_img2}
            style={{ clipPath: "circle()", marginRight: "-8rem" }}
            alt="..."
          />
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div
            style={{
              height: "250px",
              width: "250px",
              backgroundColor: "#FC5F03",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "17px",
              color: "white",
            }}
          >
            <p style={{ fontSize: "10px", textAlign: "center" }}>
              To get the width, Open the window and measure the distance from
              inner most part of the vertical frame. Measure to the 1/8th inch
              mark.
            </p>
            <p style={{ fontSize: "10px", textAlign: "center" }}>
              To get the width, Open the window and measure the distance from
              inner most part of the vertical frame. Measure to the 1/8th inch
              mark.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <div
            style={{
              height: "250px",
              width: "250px",
              backgroundColor: "#FC5F03",
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "17px",
              color: "white",
            }}
          >
            <p style={{ fontSize: "10px", textAlign: "center" }}>
              To get the height, measure the distance from the inner most part
              of the horizontal frame. Measure to the 1/8th inch mark.
            </p>
            <p style={{ fontSize: "10px", textAlign: "center" }}>
              Subtract 3/8th of an inch from your measurement.
            </p>
          </div>
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-12 col-md-4">
          <img
            src={card_img2}
            style={{ clipPath: "circle()", marginLeft: "-8rem" }}
            alt="..."
          />
        </div>
        <div className="col-12 col-md-4 text-center">
          <img src={card_img2} style={{ clipPath: "circle()" }} alt="..." />
        </div>
        <div className="col-12 col-md-4 text-end">
          <img
            src={card_img2}
            style={{ clipPath: "circle()", marginRight: "-8rem" }}
            alt="..."
          />
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={card_img1} style={{ clipPath: "circle()" }} alt="..." />
        </div>

        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
          <img src={card_img1} style={{ clipPath: "circle()" }} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default AccurateWindowMeasurements;
