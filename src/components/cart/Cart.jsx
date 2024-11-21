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
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import productdelivery from "../../assets/product-delivery-icon.png";
import truckicon from "../../assets/truck-icon.png";
import Vector from "../../assets/Vector.png";
import { Link, useLocation } from "react-router-dom";
import { CouponDetails } from "./CouponDetails";

const Cart = () => {
  const location = useLocation();

  const { price,selectedImage,getEstimation, } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [showCouponDetails, setShowCouponDetails] = useState(false);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) =>
      operation === "increment"
        ? prevQuantity + 1
        : prevQuantity > 1
        ? prevQuantity - 1
        : 1
    );
  };  

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

  const handleCheckoutClick = () => {
    setShowCouponDetails(true);
  };

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
            Cart
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container className="mt-4">
        <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={3}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    alt="Golden Door"
                    image={selectedImage || card_img1}
                    className="me-2"
                    sx={{ borderRadius: 1, objectFit: "contain", maxWidth: 50 }}
                  />
                  <Typography className="fw-bold">{getEstimation?.productDetails?.productName}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography component="div" className="fw-bold">
                  Price: <span style={{ color: "gray" }}>$ {price}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" className="text-black fw-bold">
                    Quantity:
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange("decrement")}>
                    <RemoveCircleOutlineIcon sx={{ color: "black" }} />
                  </IconButton>
                  <Typography
                    className="p-2 border border-2 rounded-1"
                    sx={{
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange("increment")}>
                    <ControlPointIcon sx={{ color: "black" }} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography component="div" className="fw-bold">
                  Subtotal: <span style={{ color: "gray" }}>$ {price * quantity}</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Link to="/measured-windows">
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "black",
                      color: "black",
                      textTransform: "none",
                    }}
                    className="rounded-3"
                  >
                    See
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box sx={{ p: 1 }}>
          {showCouponDetails ? (
            <CouponDetails />
          ) : (
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ mb: 3 }}>
                  <Card
                    className="shadow"
                    sx={{
                      bgcolor: "#FC5F03",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      p: 4,
                    }}
                  >
                    <img
                      src={truckicon}
                      alt="df"
                      height={40}
                      className="me-4"
                    />
                    <CardContent sx={{ padding: "0 !important" }}>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Delivery
                      </Typography>
                      <Typography>Available</Typography>
                    </CardContent>
                  </Card>
                </Box>

                {/* Pickup Card */}
                <Card
                  variant="outlined"
                  className="shadow"
                  sx={{
                    display: "flex",
                    border: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 4,
                  }}
                >
                  <img
                    src={productdelivery}
                    alt="df"
                    height={40}
                    className="me-4"
                  />
                  <CardContent sx={{ padding: "0 !important" }}>
                    <Typography
                      variant="h6"
                      color="primary"
                      sx={{ fontWeight: "bold" }}
                    >
                      Pickup
                    </Typography>
                    <Typography color="error">Available</Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid
                item
                xs={12}
                md={8}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    p: { xs: 2, md: 4 },
                    boxShadow: 3,
                    borderRadius: 2,
                    height: { xs: "auto", md: 200 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    {/* Image Icon */}
                    <Grid
                      item
                      xs={12}
                      md={2}
                      sx={{
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "center" },
                        mb: { xs: 2, md: 0 },
                      }}
                    >
                      <img
                        src={Vector}
                        alt="Truck Icon"
                        height={40}
                        className="me-4"
                      />
                    </Grid>

                    {/* Address and Zip Code Fields */}
                    <Grid item xs={12} md={10}>
                      <Box>
                        <Grid container spacing={2}>
                          {/* Address Field */}
                          <Grid item xs={4}>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Address:
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              fullWidth
                              placeholder="Enter Your Address"
                              variant="outlined"
                              sx={{
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": {
                                  border: "none",
                                },
                                padding: "4px 10px",
                              }}
                            />
                          </Grid>

                          {/* Zip Code Field */}
                          <Grid item xs={4}>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Zip Code:
                            </Typography>
                          </Grid>
                          <Grid item xs={8}>
                            <TextField
                              fullWidth
                              placeholder="Enter Zip code"
                              variant="outlined"
                              sx={{
                                borderRadius: 1,
                                "& .MuiOutlinedInput-notchedOutline": {
                                  border: "none",
                                },
                                padding: "4px 10px",
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          )}
        </Box>

        <Box className="text-center mt-4">
          <Link to="/customer-details">
            <Button
              variant="contained"
              sx={{
                p: 1,
                backgroundColor: "#FC5F03",
                borderColor: "#FC5F03",
                textTransform: "none",
                width: "150px",
              }}
              className="rounded-3 fw-bold"
              onClick={handleCheckoutClick}
            >
              Check Out
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
export default Cart;
