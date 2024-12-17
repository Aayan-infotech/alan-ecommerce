import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import banner from "../../src/assets/contact.png";
import card_img1 from "../../src/assets/image 1.png";
import { useLocation } from "react-router-dom";

export const About = () => {
  const location = useLocation();

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ");
  };

  const aboutContent = {
    title: "Get In Touch With Us",
    description:
      "For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!",
    image: card_img1,
    sections: [
      `Discount Door and Window (DDW) is dedicated to providing the lowest cost retrofit doors and windows on the market today. DDW accomplishes this by working with well-established wholesalers, keeping overhead costs down to a minimum, and passing on the savings to you.`,
      `DDW's goal is to make buying doors and windows easier and more affordable than ever before by utilizing the internet as a store front.`,
      `We are committed to excellence and customer satisfaction.`,
    ],
  };

  return (
    <div className="doors-container px-3 mb-4">
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { xs: "200px", md: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", md: "1.2rem" },
            }}
          >
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>
      <Container className="mt-4">
        <Box className="text-center d-flex flex-column align-items-center">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "black",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            {aboutContent.title}
          </Typography>
          <Typography
            className="text-secondary"
            sx={{
              mt: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            {aboutContent.description}
          </Typography>
          <Grid container spacing={2} className="mt-4">
            <Grid item xs={12} sm={4}>
              <img
                src={aboutContent.image}
                alt="About Us"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              sx={{ textAlign: "justify", fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {aboutContent.sections.map((paragraph, index) => (
                <Typography key={index} paragraph>
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid container spacing={2} className="mt-4">
            <Grid
              item
              xs={12}
              sx={{ textAlign: "justify", fontSize: { xs: "0.9rem", md: "1rem" } }}
            >
              {aboutContent.sections[0]}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
