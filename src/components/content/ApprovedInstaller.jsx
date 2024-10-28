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
          {pre_approved_installer.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              // mt={2}
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <img
                src={card_img2}
                alt="Guide 1"
                className="w-100"
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              // alignItems: "center",
              textAlign: { xs: "center", md: "left" },
              paddingX: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="body1" paragraph>
              {pre_approved_installer.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box >
              {pre_approved_installer.description1}
            </Box>
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
              {pre_approved_installer.related_articles.diy_window_guides.map(
                (guide, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      display: "list-item",
                      listStyleType: "disc",
                      lineHeight: { xs: "1.5rem", md: "1.8rem" },
                      fontWeight: "bold"
                    }}
                  >
                    <Link
                      to="#"
                      underline="hover"
                      className="text-decoration-none text-black"
                    >
                      {guide}
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

export default ApprovedInstaller;
