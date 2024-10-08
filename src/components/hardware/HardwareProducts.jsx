import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import banner from "../../assets/doors.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card_img1 from "../../assets/window.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useLocation } from "react-router-dom";

export const HardwareProducts = () => {
  const location = useLocation();

  const products = [
    {
      id: 1,
      title: "Product",
      price: 200,
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: card_img1,
    },
    {
      id: 2,
      title: "Product",
      price: 200,
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: card_img2,
    },
    {
      id: 3,
      title: "Product",
      price: 200,
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: card_img3,
    },
    {
      id: 4,
      title: "Product",
      price: 200,
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: card_img1,
    },
  ];

  return (
    <div className="doors-container px-3">
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
            Hardware Products
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>Home {location?.pathname}</span>
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
                  backgroundColor: " #CCDFF1",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150 }}
                  image={product.imageUrl}
                  alt={product.title}
                />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Box
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Button variant="contained" size="small">
                        Buy Now
                      </Button>
                      <Button variant="outlined" size="small">
                        Add to cart
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
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
