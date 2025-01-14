import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const MeasuredWindows = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    selectedOptions,
    customDimensions,
    selectedImage,
    totalPrice,
    currentProductDetails,
  } = location.state || {};

  console.log(selectedOptions, "details");

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
              <Box className="text-center">
                <img
                  src={selectedImage || No_Image_Available}
                  alt="Window"
                  height="300"
                />
              </Box>
              <Box>
                <Typography variant="h4" sx={{ mt: 2 }} className="fw-bold">
                  {currentProductDetails?.product?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  dangerouslySetInnerHTML={{
                    __html:
                      currentProductDetails?.product?.Description || "N/A",
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
                      ([key, { value, name }], index) => (
                        <Grid item xs={6} key={index}>
                          <Typography variant="h6">
                            {key.replace(/([a-z])([A-Z])/g, "$1 $2")}
                          </Typography>
                          <Typography variant="body1">
                            <strong className="fs-5">{name || "N/A"}</strong>
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
              className="text-end"
            >
              <Button
                variant="contained"
                className="fw-bold me-3"
                sx={{
                  width: "150px",
                  backgroundColor: "black",
                  fontSize: "17px",
                }}
              >
                ${totalPrice}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "150px", textTransform: "none" }}
                className="fw-bold"
                onClick={handleToProceedCart}
              >
                Next <ArrowForwardIcon className="fs-5"/>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
