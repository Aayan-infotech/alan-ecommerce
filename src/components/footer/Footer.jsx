import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import "../../styles/Footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const linkGroup = {
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      ,
    ],
    customer_services: [
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/faq" },
      { name: "Testimonials/Reviews", path: "/testimonials" },
      { name: "Pickup in Sandalga", path: "/pickup" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms & Conditions", path: "/terms" },
    ],
    more_options: [
      { name: "Orders", path: "/orders" },
      { name: "Login/Register", path: "/login" },
      { name: "Track Order", path: "/order-track" },
      { name: "Shopping Cart", path: "/cart" },
      { name: "Door Hardware", path: "/hardware-products" },
      { name: "Right For Me", path: "/rightfor-me" },
      // { name: "Get Tax Rebate!", path: "/tax-rebate" },
      // { name: "Gallery", path: "/gallery" },
      // { name: "Replacement Windows", path: "/replacement-windows" },
      // { name: "Our Vinyl Products", path: "/ourvinylproducts" },
      // { name: "Dentil Shelfc", path: "/dentil-shelfc" },
    ],
    help: [
      { name: "Payment Options", path: "/payment-options" },
      { name: "Returns", path: "/returns" },
      { name: "Privacy Policies", path: "/privacy-policies" },
    ],
  };
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
                {linkGroup?.links?.map((linkItem, idx) => (
                  <Typography key={idx}>
                    <Link
                      to={linkItem.path}
                      className="text-decoration-none text-black"
                    >
                      {linkItem.name}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Customer Services
              </Typography>
              <Box>
                {linkGroup?.customer_services?.map((linkItem, idx) => (
                  <Typography key={idx}>
                    <Link
                      to={linkItem.path}
                      className="text-decoration-none text-black"
                    >
                      {linkItem.name}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                More Options
              </Typography>
              <Box>
                {linkGroup?.more_options?.map((linkItem, idx) => (
                  <Typography key={idx}>
                    <Link
                      to={linkItem.path}
                      className="text-decoration-none text-black"
                    >
                      {linkItem.name}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Help
              </Typography>
              <Box>
                {linkGroup?.help?.map((linkItem, idx) => (
                  <Typography key={idx}>
                    <Link
                      to={linkItem.path}
                      className="text-decoration-none text-black"
                    >
                      {linkItem.name}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start">
              <Typography className="fw-bold text-black" variant="h6">
                Message
              </Typography>
              <p className="text-decoration-underline">
                Share your thoughts about us... <span>Send</span>
              </p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/discountDoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton sx={{border:"1px solid #fc5f03"}} size="small" className="me-2">
                    <FacebookIcon />
                  </IconButton>
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <IconButton sx={{border:"1px solid #fc5f03"}} size="small" className="me-2">
                  <LinkedInIcon />
                </IconButton>
                </a>
                <a
                  href="https://www.youtube.com/user/DiscountDW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <IconButton sx={{border:"1px solid #fc5f03"}} size="small">
                  <TwitterIcon />
                </IconButton>
                </a>
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
