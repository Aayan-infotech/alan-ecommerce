import React from "react";
import { Grid, Typography, Button, Box, Container } from "@mui/material";
import card_img1 from "../../assets/window.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation } from "react-router-dom";

export const MeasuredWindows = () => {
  const location = useLocation();
  const { selectedOptions, price, selectedImage } = location.state || {};

  return (
    <div>
      <Container className="mt-4">
        <Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box>
                <img
                  src={selectedImage || card_img1}
                  alt="Wood Entry Door"
                  className="w-100 rounded-4"
                  // style={{ maxWidth: 400, maxHeight: 400, borderRadius: "8px" }}
                />
                <Typography variant="h4" sx={{ mt: 2 }} className="fw-bold">
                  Wood Entry Door
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box sx={{ padding: "20px" }}>
                <Grid container spacing={2}>
                  {selectedOptions &&
                    Object.entries(selectedOptions).map(
                      ([key, value], index) => (
                        <Grid item xs={6} key={index}>
                          <Typography variant="body2">
                            {key.replace(/_/g, " ")}
                          </Typography>
                          <Typography variant="body1">
                            <strong className="fs-5">
                              <strong className="fs-5">{value || "N/A"}</strong>
                            </strong>
                          </Typography>
                        </Grid>
                      )
                    )}
                  {/* {selectedOptions && Object.entries(selectedOptions).map(
                      ([key, value], index) => (
                        <Grid item xs={6} key={index}>
                          <Typography variant="body2">
                            {key.replace(/_/g, " ")}
                          </Typography>
                          <Typography variant="body1">
                            <strong className="fs-5">{value || "N/A"}</strong>
                          </Typography>
                        </Grid>
                      )
                    )} */}
                  {/* <Grid item xs={6}>
                    <Typography variant="body2">Height</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.Height_Inches_Fraction || 'N/A'} inch</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2">Fraction</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.fraction || 'N/A'}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Grid</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.Select_Grid_Options || 'N/A'}</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2">Fin Type</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.Fin_Type || 'N/A'}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Glass Type</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.glass_type || 'N/A'}</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2">Color</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.color || 'N/A'}</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Tempering Option</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.Tempering_Option || 'N/A'}</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography variant="body2">Side Window Open</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">Yes</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2">Installation Option</Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">{selectedOptions?.Installation_Option || 'N/A'}</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="body2">
                      Special Instructions, Questions or Comments?
                    </Typography>
                    <Typography variant="body1">
                      <strong className="fs-5">No Comments</strong>
                    </Typography>
                  </Grid> */}
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
                sx={{ width: "150px", backgroundColor: "black" }}
              >
                $ {price}
              </Button>
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: "150px" }}
              >
                Add to cart
              </Button>
              <Link to="/cart">
                <Button variant="contained" sx={{ width: "150px" }}>
                  Next <ArrowForwardIcon />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
