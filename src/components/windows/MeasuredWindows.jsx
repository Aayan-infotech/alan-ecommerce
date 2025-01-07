import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import card_img1 from "../../assets/window.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const MeasuredWindows = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedOptions, customDimensions, selectedImage, totalPrice, currentProductDetails } =
    location.state || {};

  console.log(currentProductDetails, "details");

  const handleToProceedCart = () => {
    const selectedOptionsDetails = {
      price: totalPrice,
      selectedImage,
      getEstimation: selectedOptions,
      customDimensions,
    };
    navigate("/cart", { state: selectedOptionsDetails });
  };

  return (
    <div>
      <Container className="mt-4">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box>
                <img
                  src={selectedImage || "/src/assets/window.png"}
                  alt="Window"
                  className="w-100 rounded-4"
                />
                <Typography variant="h4" sx={{ mt: 2 }} className="fw-bold">
                  {currentProductDetails?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  dangerouslySetInnerHTML={{
                    __html: currentProductDetails?.Description || "N/A",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ padding: "20px" }}>
                <Grid container spacing={2}>
                  {customDimensions &&
                    Object.entries(customDimensions).map(
                      ([key, value], index) => (
                        <Grid item xs={6} key={index}>
                          <Typography variant="h6">
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
                          </Typography>
                          <Typography variant="body1">
                            <strong className="fs-5">{value || "N/A"}</strong>
                          </Typography>
                        </Grid>
                      )
                    )}

                  {selectedOptions &&
                    Object.entries(selectedOptions).map(
                      ([key, value], index) => (
                        <Grid item xs={6} key={index}>
                          <Typography variant="h6">
                            {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                          </Typography>
                          <Typography variant="body1">
                            <strong className="fs-5">{value || "N/A"}</strong>
                          </Typography>
                        </Grid>
                      )
                    )}
                </Grid>
              </Box>
            </Grid>
          </Grid>

          {/* ------------------Pricing Section------------------------------- */}
          <Grid
            container
            rowSpacing={1}
            marginTop={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            className="mb-4"
          >
            <Grid item xs={6}>
              <Typography variant="h6">
                Pricing (According to selected options)
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                className="fw-bold"
                sx={{ width: "150px", backgroundColor: "black", fontSize:"17px" }}
              >
                ${totalPrice}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "150px", textTransform:"none" }}
                className="fw-bold"
              >
                Add to cart
              </Button>
              <Button
                onClick={handleToProceedCart}
                variant="contained"
                sx={{ width: "150px", textTransform:"none" }}
              >
                Next <ArrowForwardIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
