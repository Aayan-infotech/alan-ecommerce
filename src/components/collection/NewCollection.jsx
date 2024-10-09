import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import card_img4 from "../../assets/card_img4.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useLocation } from "react-router-dom";

export const NewCollection = () => {
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
      title: "Product 1",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img4,
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img2,
    },
    {
      id: 3,
      title: "Product 3",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img3,
    },
    {
      id: 4,
      title: "Product 4",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img1,
    },
    {
      id: 1,
      title: "Product 1",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img4,
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img2,
    },
    {
      id: 3,
      title: "Product 3",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img3,
    },
    {
      id: 4,
      title: "Product 4",
      price: 200,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo..",
      imageUrl: card_img1,
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
            New Collection
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
          {products?.map((collection, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={card_img2}
                  title="green iguana"
                />
                <CardContent sx={{ backgroundColor: "#CCDFF1" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      color="primary"
                      className="fw-bold"
                      variant="h5"
                      component="div"
                    >
                      {collection?.title}
                    </Typography>
                    <Typography
                      color="primary"
                      className="fw-bold"
                      variant="h5"
                      component="div"
                    >
                      ${collection?.price}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className="my-2"
                  >
                    <Button
                      size="small"
                      variant="contained"
                      className="fw-bold"
                    >
                      Buy Now
                    </Button>
                    <Button size="small" variant="outlined" className="fw-bold">
                      Add To Cart
                    </Button>
                  </Box>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
