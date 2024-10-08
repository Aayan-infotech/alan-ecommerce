import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import "../../styles/Footer.scss";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container overflow-hidden text-center px-4">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <div className="footer-logo">
                <img
                  src={logo}
                  alt="Discount Doors & Windows"
                  className="logo"
                />
                <Typography variant="h6" className="address">
                  400 University Drive Suite 200 Coral Gables,
                  <br />
                  FL 33134 USA
                </Typography>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-1 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Links
              </Typography>
              <Box>
                <Typography>Home</Typography>
                <Typography>Gallery</Typography>
                <Typography>About Us</Typography>
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Customer Services
              </Typography>
              <Box>
                <Typography>Contact Us</Typography>
                <Typography>FAQs</Typography>
                <Typography>Testimonials/Reviews</Typography>
                <Typography>Pickup in Sandalga</Typography>
                <Typography>Privacy Policy</Typography>
                <Typography>Terms & Conditions</Typography>
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                More Options
              </Typography>
              <Typography>Orders</Typography>
              <Typography>Login/Register</Typography>
              <Typography>Track Order</Typography>
              <Typography>Shopping Cart</Typography>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Help
              </Typography>
              <Typography>Payment Options</Typography>
              <Typography>Returns</Typography>
              <Typography>Privacy Policies</Typography>
              {/* </div> */}
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Message
              </Typography>
              <p className="text-decoration-underline">
                Share your thoughts about us... <span>Send</span>
              </p>
              <div className="social-icons">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Divider
            sx={{
              width: "75%",
              bgcolor: "black",
              height: "1px",
            }}
            className="mt-3"
          />
        </Box>
        <Box className="text-center">
          <Typography className="text-black fw-bold fs-6">
            © 2023 Discount Doors & Windows. All rights reserved
          </Typography>
        </Box>
      </footer>
    </div>
  );
};
