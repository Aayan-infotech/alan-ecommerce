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

const pickupAddressOptions = [
  {
    id: "option1",
    title: "Window Pick Up",
    description: [
      "Green World Windows and Doors",
      "3810 Wabash Drive",
      "Mira Loma, CA 91752",
    ],
    price: "$340",
  },
  {
    id: "option2",
    title: "Door Pickup",
    description: ["A.A.W. Doors", "13900 S Broadway", "Los Angeles, CA 90061"],
    price: "$140",
  },
  {
    id: "option3",
    title: "Both Door and Window Pick Up",
    description: [
      "Discount Door and Window",
      "5450 Complex St.",
      "Unit 301",
      "San Diego, CA 92123",
    ],
    price: "$440",
  },
];

const Cart = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [showCouponDetails, setShowCouponDetails] = useState(false);
  const [shippinhgMethod, setShippinhgMethod] = useState("delivery");
  const [selectedOption, setSelectedOption] = useState("");
  const { price, selectedImage, getEstimation } = location.state || {};

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

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
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
        <div className="card mb-4">
          <div className="card-body">
            <div className="row gx-4 align-items-center">
              <div className="col-12 col-sm-4 col-md-3 mb-3 mb-md-0">
                <div className="d-flex align-items-center">
                  <img
                    src={selectedImage || card_img1}
                    height="50"
                    alt="image"
                    className="me-2"
                  />
                  <div>
                    <p className="mb-0">
                      {getEstimation?.productDetails?.productName ||
                        "Product Name"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-2 mb-2 mb-md-0">
                <div className="text-start text-md-center">
                  Price:&nbsp;<span style={{ color: "gray" }}>${price}</span>
                </div>
              </div>

              <div className="col-12 col-sm-8 col-md">
                <div className="d-flex justify-content-between justify-content-md-start align-items-center">
                  Quantity:
                  <IconButton onClick={() => handleQuantityChange("decrement")}>
                    <RemoveCircleOutlineIcon sx={{ color: "black" }} />
                  </IconButton>
                  <Typography
                    className="p-2 border border-2 rounded-1 text-center"
                    sx={{
                      height: "30px",
                      minWidth: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange("increment")}>
                    <ControlPointIcon sx={{ color: "black" }} />
                  </IconButton>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-2 mb-2 mb-md-0">
                <div className="text-start text-md-center">
                  Subtotal:&nbsp;
                  <span style={{ color: "gray" }}>${price * quantity}</span>
                </div>
              </div>

              <div className="col-6 col-sm-4 col-md-1 d-flex justify-content-center">
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
              </div>

              <div className="col-6 col-sm-4 col-md-1 d-flex justify-content-center">
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-3 gy-3">
          <div className="col-12 col-md-4">
            <div className="p-2 border border-1 rounded">
              <h6 className="fw-bold">Billing</h6>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Country"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    style={{ outline: "none", boxShadow: "none" }}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-4 border border-1 rounded p-2">
            <h6 className="fw-bold">Shipping Method</h6>
            <div className="d-flex align-items-center mb-3">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={shippinhgMethod === "delivery"}
                  onChange={() => setShippinhgMethod("delivery")}
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Delivery
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={shippinhgMethod === "pickup"}
                  onChange={() => setShippinhgMethod("pickup")}
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Pickup
                </label>
              </div>
            </div>
            {shippinhgMethod === "pickup" && (
              <div>
                {pickupAddressOptions.map((option) => (
                  <div
                    key={option.id}
                    className="p-2 border border-1 rounded mb-2 d-flex align-items-start"
                  >
                    <input
                      type="radio"
                      id={option.id}
                      name="pickupOption"
                      value={option.id}
                      className="me-2"
                      checked={selectedOption === option.id}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor={option.id}
                      className="w-100 d-flex justify-content-between"
                    >
                      <div>
                        <h6 className="fw-bold">{option.title}</h6>
                        {option.description.map((line, index) => (
                          <p key={index} className="mb-0">
                            &nbsp;-&nbsp;{line}
                          </p>
                        ))}
                      </div>
                      {/* <h6 className="fw-bold">{option.price}</h6> */}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {shippinhgMethod === "delivery" && (
              <div className="p-2 border border-1 rounded mb-2 d-flex align-items-start">
                <input
                  type="radio"
                  id="option3"
                  name="pickupOption"
                  value="option3"
                  className="me-2"
                />
                <label
                  htmlFor="option3"
                  className="w-100 d-flex justify-content-between"
                >
                  <div>
                    <h6 className="fw-bold">Noida Sector 66, </h6>
                    <p className="mb-0">&nbsp;-&nbsp;Abinash Sinha</p>
                    <p className="mb-0">&nbsp;-&nbsp;Uttar Pradesh, India</p>
                    <p className="mb-0">&nbsp;-&nbsp;Metro 59</p>
                  </div>
                  {/* <h6 className="fw-bold">$240</h6> */}
                </label>
              </div>
            )}
          </div>
          <div className="col-12 col-md-4 mt-3">
            <div className="p-2 border border-1 rounded">
              <h6 className="fw-bold">Product Details</h6>
              <div>
                <h6 className="fw-bold">
                  {getEstimation?.productDetails?.productName || "Product Name"}
                </h6>
                <p className="mb-0">
                  Rating: {getEstimation?.productDetails?.rating || "N/A"} / 5
                </p>
                {/* <p className="mb-0">
                  Review: {getEstimation?.productDetails?.review || "No review"}
                </p> */}
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Price</span>
                <span>${price || "0.00"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Quantity</span>
                <span>{quantity || "1"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>${(price * quantity).toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${(price * quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* <Box sx={{ p: 1 }}>
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
                      p: 2,
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
                    <Grid item xs={12} md={10}>
                      <Box>
                        <Grid container spacing={2}>
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
        </Box> */}

        <Box className="text-center mt-4">
          <Link to="/checkout">
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
