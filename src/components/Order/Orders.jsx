import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import card_img4 from "../../assets/card_img4.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useLocation } from "react-router-dom";

const Orders = () => {
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

  const products = [
    {
      id: 1,
      title: "Window 1",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
      imageUrl: card_img1,
      isDelivered: true,
      trackOrder: true,
    },
    {
      id: 2,
      title: "Product",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
      imageUrl: card_img2,
    },
    {
      id: 3,
      title: "Product",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
      imageUrl: card_img3,
    },
    {
      id: 4,
      title: "Product",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.",
      imageUrl: card_img4,
    },
  ];

  return (
    <div className="doors-container px-3 mb-4">
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h2" className="text-black fw-bold">
            Orders
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container className="mt-4">
        <Grid container spacing={2}>
          {products?.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  maxWidth: 500,
                  height: 200,
                  position: "relative",
                }}
              >
                {product.isDelivered && (
                  <Chip
                    label="Delivered"
                    color="success"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      zIndex: 1,
                      borderRadius: 2,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 200 }}
                  image={product.imageUrl}
                  alt={product.title}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#CCDFF1",
                    width: "100%",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {product.title}
                      </Typography>
                      <Typography variant="h6" color="primary">
                        ${product.price}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="primary">
                      {product.description}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="my-1"
                    >
                      {product.trackOrder ? (
                        <Link to="/order-track">
                          <Button variant="contained" size="small" fullWidth>
                            Track Order
                          </Button>
                        </Link>
                      ) : (
                        <>
                          <Button variant="contained" size="small">
                            Rebook
                          </Button>
                          <Button variant="outlined" size="small">
                            Add to cart
                          </Button>
                        </>
                      )}
                    </Box>

                    {!product.trackOrder && (
                      <Box
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
                      </Box>
                    )}
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Orders;
