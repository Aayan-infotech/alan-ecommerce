import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "../../styles/Home.scss";
import banner from "../../assets/home-banner.png";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import { OurProducts } from "./OurProducts";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomerFeedback } from "./CustomerFeedback";
import { LatestBlogs } from "./LatestBlogs";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/spotlightSlice";
import sliding_image from "../../assets/sliding.png";
import entrydoors_image from "../../assets/entrydoors.png";
import window_image from "../../assets/window.png";
import bifold_image from "../../assets/card_img4.png";
import interriordoors_image from "../../assets/interriordoors.png";
import harware_image from "../../assets/harware.png";

export const Home = () => {
  const [spotLightProduct, setSpotLightProduct] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const fetchAllSpotLightDeals = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/all-deals");
      if (response?.data?.status) {
        setSpotLightProduct(response?.data?.data);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAllSpotLightDeals();
  }, []);

  const buttonData = [
    { urlPath: "/order-track", label: "Track Your Order" },
    { urlPath: "/rightfor-me", label: "Energy Saving" },
    { urlPath: "/accurate-measurements", label: "Measure Your Old" },
    { urlPath: "/pre-approved-installer", label: "Find an Installer" },
    { urlPath: "/diyinstall-guides", label: "DIY Installation Guide" },
  ];
  const expore_products = [
    { id: 1, product_name: "Windows", image: window_image },
    { id: 2, product_name: "Sliding Door", image: sliding_image },
    { id: 3, product_name: "System", image: entrydoors_image },
    { id: 1, product_name: "Bi-Fold and French Doors", image: bifold_image },
    { id: 2, product_name: "Interior Doors", image: interriordoors_image },
    { id: 3, product_name: "Hardware", image: harware_image },
  ];

  const handleAddToCart = (productId, quantity) => {
    dispatch(addToCart({ productId, quantity }));
  };

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 2;

    function scrollMarquee() {
      scrollAmount -= scrollSpeed;
      if (marquee.scrollWidth + scrollAmount <= 0) {
        scrollAmount = 0;
      }
      marquee.style.transform = `translateX(${scrollAmount}px)`;
      requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
  }, []);

  return (
    <div className="home-container px-4">
      <Container>
        <Grid container alignItems="center" className="home-content">
          {/* Left Section: Text */}
          <Grid item xs={12} md={6} className="text-section">
            <Typography variant="h3" component="h1" className="main-heading">
              Upgrade Your Home With
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              className="highlighted-heading"
            >
              The Right <span>Windows, Doors,</span>{" "}
              <span style={{ fontWeight: "bold" }}>And More—Affordably.</span>
            </Typography>
            <Link to="/get-estimation">
              <Button
                variant="contained"
                color="primary"
                className="estimate-button"
              >
                Get Estimates
              </Button>
            </Link>
          </Grid>

          {/* Right Section: Image */}
          <Grid item xs={12} md={6} className="image-section">
            <img
              src={banner} // Replace with your image path
              alt="Home"
              className="home-image"
            />
          </Grid>
        </Grid>
      </Container>
      <Box className="marquee-container">
        <div className="marquee-content" ref={marqueeRef}>
          <div className="d-flex">
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
          </div>
          <div className="d-flex">
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
            <Typography
              variant="h2"
              className="me-2 fw-bold"
              sx={{ color: "#0068B3" }}
            >
              SELECT PRODUCTS BELOW AND GET PRICING NOW,
            </Typography>
          </div>
        </div>
      </Box>
      {/* ----------------all content pages--------------------- */}
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {buttonData.map((button, index) => (
            <Link to={button?.urlPath} key={index}>
              <Button
                variant="contained"
                className="me-3"
                sx={{ textTransform: "none" }}
              >
                {button.label} <ArrowForwardIcon className="fs-5" />
              </Button>
            </Link>
          ))}
        </Box>

        {/* ----------------Spotlight Deals--------------------- */}

        <Box className="spotlight_deals mt-4 mb-4">
          <Typography variant="h4" className="heading_1">
            Explore
          </Typography>
          {/* <Typography variant="h6" className="title">
            Explore Details
          </Typography> */}
        </Box>

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {expore_products.length > 0 ? (
            expore_products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 300, mx: "auto" }}>
                  {/* <CardMedia
                    sx={{ height: 250, backgroundSize: "contain" }}
                    image={item?.image || No_Image_Available}
                    title="Product Image"
                  /> */}
                  <CardMedia
                    component="img"
                    height="300"
                    image={item?.image || No_Image_Available}
                    alt="green iguana"
                  />
                  <CardContent sx={{ backgroundColor: "#0068B333" }}>
                    <Box
                      sx={{
                        // display: "flex",
                        // justifyContent: "space-between",
                        // alignItems: "center",
                        color: "#0068B3",
                        fontWeight: "bold",
                      }}
                      className="text-center"
                    >
                      <Typography
                        className="fw-bold"
                        variant="h5"
                        component="div"
                      >
                        {item?.product_name}
                      </Typography>
                    </Box>
                    <Box
                      // sx={{
                      //   display: "flex",
                      //   justifyContent: "space-between",
                      // }}
                      className="mt-2"
                    >
                      <Button
                        size="large"
                        variant="contained"
                        sx={{ textTransform: "none", fontWeight: "bold" }}
                        className="w-100 fw-bold"
                      >
                        Buy Now
                      </Button>
                      {/* <Button
                        size="small"
                        variant="outlined"
                        sx={{ textTransform: "none", fontWeight: "bold" }}
                        className="w-100"
                        onClick={() => handleAddToCart(item._id, 1)}
                      >
                        Add To Cart
                      </Button> */}
                    </Box>
                    {/* <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="mt-1"
                    >
                      <Box sx={{ fontWeight: "bold", color: "#0068B3" }}>
                        <FavoriteBorderIcon className="fs-6" />
                        Like
                      </Box>
                      <Box sx={{ color: "#0068B3", fontWeight: "bold" }}>
                        <ShareIcon className="fs-6" />
                        Share
                      </Box>
                    </Box> */}
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" align="center">
                {errorMessage}
              </Typography>
            </Grid>
          )}
        </Grid>

        {/* ----------------Our Products--------------------- */}
        <Box>
          <OurProducts />
        </Box>

        {/* ----------------Our Customer Feedback--------------------- */}
        <Box>
          <CustomerFeedback />
        </Box>

        {/* ----------------Latest Blogs--------------------- */}
        <Box>
          <LatestBlogs />
        </Box>
      </Container>
    </div>
  );
};
