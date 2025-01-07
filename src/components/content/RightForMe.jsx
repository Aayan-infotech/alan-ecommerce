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
import clauk from "../../components/content/Caulk";

const RightForMe = () => {
  const { whats_right_for_me } = content;

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
          {whats_right_for_me.title}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <img src={card_img1} alt="Guide 1" className="w-100" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              textAlign: { xs: "center", md: "left" },
              paddingX: { xs: 2, md: 0 },
            }}
          ></Grid>
          <Grid item xs={12}>
            <Box>{whats_right_for_me.description1}</Box>
            <p className="mb-0 p-0">{whats_right_for_me.description}</p>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              paddingX: { xs: 2, md: 0, marginLeft:"20px" },
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
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
                {whats_right_for_me.related_articles.diy_window_guides
                  .slice(0, 5)
                  .map((guide, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        lineHeight: "0.8rem",
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
                  ))}
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
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
                {whats_right_for_me.related_articles.diy_window_guides
                  .slice(5, 10)
                  .map((guide, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        display: "list-item",
                        listStyleType: "disc",
                        lineHeight: "0.8rem",
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
                  ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default RightForMe;
