import React from "react";
import content from "../../json/doors.json";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import card_img1 from "../../assets/Group 35593.png";
import card_img2 from "../../assets/tape_measure200 2.png";

const AccurateMeasurements = () => {
  const { accurate_measurements } = content;

  return (
    <div>
      <Container sx={{ mt: { xs: 2, md: 4 } }}>
        <Typography
          variant="h4"
          gutterBottom
          className="fw-bold"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.125rem" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {accurate_measurements.title}
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <Box
              mt={2}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <img
                src={card_img1}
                alt="Guide 1"
                style={{
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              mt={2}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <img
                src={card_img2}
                alt="Guide 1"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
              paddingX: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="body1" paragraph>
              {accurate_measurements.description}
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              paddingX: { xs: 2, md: 0 },
            }}
          >
            <List
              sx={{
                listStyleType: "disc",
                paddingLeft: { xs: 2, md: "20px" },
                maxWidth: "500px",
                width: "100%",
              }}
            >
              {accurate_measurements.related_articles.diy_window_guides.map(
                (guide, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      listStyleType: "disc",
                      lineHeight: { xs: "1.5rem", md: "1.8rem" },
                      fontWeight:"bold"
                    }}
                  >
                    <Link
                      to={guide?.path}
                      underline="hover"
                      className="text-decoration-none text-black"
                    >
                      {guide?.title}
                    </Link>
                  </ListItem>
                )
              )}
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AccurateMeasurements;
