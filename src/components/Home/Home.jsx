import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "../../styles/Home.scss";
import banner from "../../assets/home-banner.png";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CustomerFeedback } from "./CustomerFeedback";
import { LatestBlogs } from "./LatestBlogs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Loader from "../../loader/Loader";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export const Home = () => {
  const [exploreCategories, setExploreCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchExploreCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://44.196.64.110:7878/api/categories/getAllCategories"
      );
      if (response?.data?.status === 200) {
        setExploreCategories(response?.data?.data);
        localStorage.setItem("windowCategoryId", response?.data?.data[0]._id);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log(error, 'data')
      setErrorMessage(error?.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExploreCategories();
  }, []);

  const buttonData = [
    { urlPath: "/order-track", label: "Track Your Order" },
    { urlPath: "/rightfor-me", label: "Energy Saving" },
    { urlPath: "/accurate-measurements", label: "Measure Your Old" },
    { urlPath: "/pre-approved-installer", label: "Find an Installer" },
    { urlPath: "/diyinstall-guides", label: "DIY Installation Guide" },
  ];

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

  const handleClick = (item) => {
    if (!item?.isSubCategory) {
      navigate(`/allsubproducts/${item?._id}`, {
        state: { categorydetails: item },
      });
    } else {
      navigate(`/categories/${item?._id}`);
    }
  };

  return (
    <>
      <div className="home-container">
        <Container maxWidth="false" className="position-relative pos-home-top mt-4 mt-lg-0">
          <Grid container alignItems="center" className="home-content ">
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
            <Grid item xs={12} md={6} className="image-section">
              <img src={banner} alt="Home" className="home-image" />
            </Grid>
          </Grid>
        </Container>

        {/* ----------------all content pages--------------------- */}
        <Container maxWidth="false">
          <Box className="marquee-container">
            <div className="marquee-content marquee-home" ref={marqueeRef}>
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
          <Box
            sx={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: { xs: "1fr", md: "auto" },
              justifyContent: { md: "space-between" },
              alignItems: "center",
            }}
            className="button-container"
          >
            {buttonData.map((button, index) => (
              <Link to={button?.urlPath} key={index} className="button-link w-100">
                <Button
                  variant="contained"
                  className="custom-button"
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
          </Box>
          {loading && (
            <Backdrop open={true} style={{ zIndex: 1000, color: "#fff" }}>
              <Loader color="inherit" />
            </Backdrop>
          )}
          {!loading && (
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              {exploreCategories.length > 0 ? (
                exploreCategories.map((item, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                      sx={{
                        // maxWidth: 300,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        mx: "auto",
                        backgroundColor: "#0068B333",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(0.95)",
                        },
                      }}
                      onClick={() => handleClick(item)}
                    >
                      <CardMedia
                        component="img"
                        image={item?.images[0] || No_Image_Available}
                        alt="green iguana"
                        sx={{
                          objectFit: "contain",
                          height: 250,
                        }}
                        className="p-2"
                      />
                      <CardContent
                        sx={{
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            color: "#0068B3",
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            className="fw-bold"
                            variant="h5"
                            component="div"
                          >
                            {item?.name
                              ?.split(" ")
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                              )
                              .join(" ")}
                          </Typography>
                        </Box>
                        <Box className="mt-2">
                          <Button
                            size="large"
                            variant="contained"
                            sx={{ textTransform: "none", fontWeight: "bold" }}
                            className="w-100 fw-bold"
                          >
                            Buy Now
                          </Button>
                        </Box>
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
          )}
          <CustomerFeedback />
          <LatestBlogs />
        </Container>
      </div>
    </>
  );
};
