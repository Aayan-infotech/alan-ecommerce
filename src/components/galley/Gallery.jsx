import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import { useLocation } from "react-router-dom";

const Gallery = () => {
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

  // Array of image sets for each carousel
  const imageSets = [
    [card_img1, card_img2, card_img3],
    [card_img1, card_img2, card_img3],
    [card_img1, card_img2, card_img3],
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
          {imageSets.map((images, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                id={`carouselExampleControls${index}`}
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`carousel-item ${
                        imgIndex === 0 ? "active" : ""
                      }`}
                    >
                      <img
                        src={img}
                        className="d-block w-100 carousel-img"
                        alt={`carousel item ${imgIndex}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleControls${index}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleControls${index}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Gallery;
