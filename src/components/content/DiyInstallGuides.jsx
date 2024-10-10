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
import card_img1 from "../../assets/doityourselfinstallguides 1.png";
import card_img2 from "../../assets/tape_measure200 2.png";

const DiyInstallGuides = () => {
  const { diy_install_guides } = content;

  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box mt={4}>
              <Typography variant="h4" gutterBottom className="fw-bold">
                {diy_install_guides.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {diy_install_guides.description}
              </Typography>
              <Typography variant="subtitle1">DIY Window Guides:</Typography>
              <Typography variant="subtitle1">Related Articles:</Typography>
              <List>
                {diy_install_guides.related_articles.diy_window_guides.map(
                  (guide, index) => (
                    <ListItem key={index} sx={{ lineHeight: "10px" }}>
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

              <Typography variant="subtitle1">DIY Door Guides:</Typography>
              <Typography variant="subtitle1">Related Articles:</Typography>
              <List>
                {diy_install_guides.related_articles.diy_door_guides.map(
                  (guide, index) => (
                    <ListItem key={index} sx={{ lineHeight: "10px" }}>
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
          <Grid item xs={6}>
            <Box>
              <img src={card_img1} width={400} />
            </Box>
            <Box className="mt-4">
              <img src={card_img2} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DiyInstallGuides;
