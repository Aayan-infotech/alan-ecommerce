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
import pdfFile from "../../src/assets/Statement.pdf";

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
    title: "About Discount Door and Window",
    description:
      "For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!",
    image: card_img1,
    sections: [
      `Discount Door and Window (DDW) is dedicated to providing the lowest cost retrofit doors and windows on the market today. DDW accomplishes this by working with well established wholesalers, keeping overhead costs down to a minimum, and passing on the savings to you. DDW's goal is to make buying doors and windows easier and more affordable.`,
      `Alan Holsapple founded DDW after 21 years of providing red carpet door and window installation and renovation services to customers in Southern California. By establishing partnerships directly with selected wholesalers, and selling a high volume of doors and windows, DDW is able to beat competitors prices while providing products that are high quality and energy efficient.`,
      `Sustainability, energy efficiency, and security features are important aspects while deciding which door or window is right for your situation. That is why DDW provides a Learning Center with a growing collection of information that can help you make the best decisions while staying within your budget. If you have any questions about the products we offer, please e-mail or call us and we will be happy to assist you in your decision making process.`,
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
          <button type="button" style={{backgroundColor:"#FC5F03"}} class="btn btn-primary border border-0 fw-bold" data-bs-toggle="modal" data-bs-target="#pdfModal">
            View Capability Statement
          </button>
        </Box>

        <div class="modal fade" id="pdfModal" tabindex="-1" aria-labelledby="pdfModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="pdfModalLabel">Alan Holsapple Capability Statement</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <iframe src={pdfFile} width="100%" height="500px"></iframe>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};
