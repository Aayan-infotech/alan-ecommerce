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
import card_img1 from "../../assets/doityourselfinstallguides 1.png";
import card_img2 from "../../assets/tape_measure200 2.png";
import { Link } from "react-router-dom";

const DiyInstallGuides = () => {
  const { diy_install_guides } = content;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" className="fw-bold">
        {diy_install_guides.title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box mt={2}>
            <img src={card_img1} alt="Guide 1" style={{ width: "100%" }} />
          </Box>
        </Grid>

        <Grid item xs={12} className="d-flex align-items-center">
          <p className="mb-0">{diy_install_guides.description_guide1}</p>
        </Grid>

        <Grid item xs={12} md={8} className="d-flex align-items-center">
          <p className="mb-0">{diy_install_guides.description_guide}</p>
        </Grid>
        <Grid item xs={12} md={4} className="d-flex justify-content-center">
          <img
            src={card_img2}
            alt="Guide 2"
            sx={{ width: { xs: "100%", md: "100%", objectFit: "contain" } }}
          />
        </Grid>

        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="space-between"
          >
            <Box mb={2}>
              <Typography variant="h5" className="fw-bold" gutterBottom>
                DIY Door Guides:
              </Typography>
              <Typography variant="subtitle1">Related Articles:</Typography>
              <List sx={{ listStyleType: "disc", pl: 2 }}>
                {diy_install_guides.related_articles.diy_door_guides.map(
                  (guide, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: "list-item", lineHeight: "1.5",lineHeight: "0.8rem", }}
                    >
                      <Link
                        to={guide?.path}
                        underline="hover"
                        className="text-black text-decoration-none"
                      >
                        {guide?.title}
                      </Link>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
            <Box>
              <Typography variant="h5" className="fw-bold">
                DIY Window Guides:
              </Typography>
              <Typography variant="subtitle1">Related Articles:</Typography>
              <List sx={{ listStyleType: "disc", pl: 2 }}>
                {diy_install_guides.related_articles.diy_window_guides.map(
                  (guide, index) => (
                    <ListItem
                      key={index}
                      sx={{ display: "list-item", lineHeight: "1.5",lineHeight: "0.8rem", }}
                    >
                      <Link
                        to={guide?.path}
                        underline="hover"
                        className="text-black text-decoration-none"
                      >
                        {guide?.title}
                      </Link>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DiyInstallGuides;
