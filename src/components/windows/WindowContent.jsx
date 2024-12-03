import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import windowimg from "../../assets/windowdesimg.png";
import content from "../../json/doors.json";

const WindowContent = () => {
  const { window_estimate_description } = content;

  return (
    <Container className="mb-4">
      <Grid container spacing={2}>
        <Grid item xs={6} className="d-flex justify-content-center">
          <Box>
            <Typography variant="h4" className="fw-bold">
              {window_estimate_description.header.title}
            </Typography>
            <Typography variant="body1" className="w-25">
              {window_estimate_description.header.description}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={window_estimate_description.image} alt="Window Description" />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {window_estimate_description.sections.map((section, index) => (
            <Box key={index} className="mb-3">
              <Typography variant="h6" gutterBottom className="fw-bold">
                {section.title}
              </Typography>
              <Typography variant="body1">{section.description}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WindowContent;
