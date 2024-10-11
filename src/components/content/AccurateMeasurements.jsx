import React from "react";
import content from "../../json/doors.json";
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import card_img1 from "../../assets/whatsrightforme 1.png";
import card_img2 from "../../assets/tape_measure200 2.png";

const AccurateMeasurements = () => {
  const { accurate_measurements } = content;

  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={4}>
              <Typography variant="h4" gutterBottom className="fw-bold">
                {accurate_measurements.title}
              </Typography>
              <Box>
                <img src={card_img2} width={400} />
              </Box>
              <Typography variant="body1" paragraph>
                {accurate_measurements.description}
              </Typography>
              <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {accurate_measurements.related_articles.diy_window_guides.map(
                  (guide, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        lineHeight: "10px",
                      }}
                    >
                      <Link
                        href="#"
                        underline="hover"
                        className="text-decoration-underline text-black"
                      >
                        {guide}
                      </Link>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AccurateMeasurements;
