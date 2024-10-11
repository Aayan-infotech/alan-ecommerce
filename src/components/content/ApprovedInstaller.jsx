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
import card_img2 from "../../assets/hireinstaller 1.png";

const ApprovedInstaller = () => {
  const { pre_approved_installer } = content;

  return (
    <div>
      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography variant="h4" gutterBottom className="fw-bold">
                {pre_approved_installer.title}
              </Typography>
              <Box>
                <img src={card_img2} width={400} />
              </Box>
              <Typography variant="body1" paragraph className="mt-2">
                {pre_approved_installer.description}
              </Typography>
              <Typography variant="body1" paragraph>
                {pre_approved_installer.description1}
              </Typography>
              <List sx={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {pre_approved_installer.related_articles.diy_window_guides.map(
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

export default ApprovedInstaller;
