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
  TextField,
  Divider,
} from "@mui/material";
import banner from "../../assets/doors.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card_img1 from "../../assets/window.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/Loader";
import WindowContent from "./WindowContent";

const Window = () => {
  const [getEstimation, setGetEstimation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedImage, setSelectedImage] = useState(card_img1);
  const [showCustomHeightWidth, setShowCustomHeightWidth] = useState(false);
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const { subcategoryDetails } = location.state || {};

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

  const fetchDimensions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://44.196.64.110:5000/api/windows/getProduct/${subcategoryDetails?._id}`
      );
      console.log(response.data.data, "response");
      if (response?.data?.success) {
        const data = response.data.data;
        setGetEstimation(data);
        setPrice(data.productDetails.price);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (subcategoryDetails?._id) {
      fetchDimensions();
    }
  }, [subcategoryDetails?._id]);

  const handleSelectChange = (dimensionKey, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [dimensionKey]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [dimensionKey]: !value ? "Please select a value" : null,
    }));
  };

  // const calculatePrice = () => {
  //   let calculatedPrice = getEstimation?.productDetails?.price || 0;
  //   Object.keys(selectedOptions).forEach((key) => {
  //     const selectedValue = selectedOptions[key];
  //     const dimension = getEstimation?.dimensions[key]?.data?.find(
  //       (item) => item.name === selectedValue
  //     );
  //     if (dimension) {
  //       calculatedPrice += dimension.cost;
  //     }
  //   });
  //   setPrice(calculatedPrice);
  // };

  // useEffect(() => {
  //   if (getEstimation) {
  //     calculatePrice();
  //   }
  // }, [selectedOptions, getEstimation]);

  const calculatePrice = () => {
    let calculatedPrice = getEstimation?.productDetails?.price || 0;
    Object.keys(selectedOptions).forEach((key) => {
      const selectedValue = selectedOptions[key];
      const dimension = getEstimation?.dimensions[key]?.data?.find(
        (item) => item.name === selectedValue
      );
      if (dimension) {
        calculatedPrice += dimension.cost;
      }
    });
    if (showCustomHeightWidth) {
      if (customWidth && !isNaN(customWidth)) {
        calculatedPrice += parseFloat(customWidth) * 10;
      }
      if (customHeight && !isNaN(customHeight)) {
        calculatedPrice += parseFloat(customHeight) * 10;
      }
    }
    setPrice(calculatedPrice);
  };

  useEffect(() => {
    if (getEstimation) {
      calculatePrice();
    }
  }, [selectedOptions, getEstimation, customWidth, customHeight]);

  const maxVisibleImages = 2;
  const remainingImages =
    getEstimation?.productDetails?.images?.length - maxVisibleImages || 0;

  const handleChangeImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleProceed = () => {
    const updatedSelectedOptions = {
      ...selectedOptions,
      Width_Inches_Fraction: customWidth,
      Height_Inches_Fraction: customHeight,
    };
    const allSelectedOptionsDetails = {
      selectedOptions: updatedSelectedOptions,
      price,
      selectedImage,
      getEstimation,
    };
    navigate("/measured-windows", { state: allSelectedOptionsDetails });
  };

  // const validateSelections = () => {
  //   const validationErrors = {};
  //   Object.entries(getEstimation?.dimensions || {}).forEach(
  //     ([key, dimension]) => {
  //       if (!selectedOptions[key]) {
  //         validationErrors[key] = `Please select a ${dimension.label}`;
  //       }
  //     }
  //   );
  //   setErrors(validationErrors);
  //   return Object.keys(validationErrors).length === 0;
  // };

  return (
    <div className="doors-container px-3">
      {loading ? (
        <Loader />
      ) : (
        <>
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
                Window
              </Typography>
              <Typography variant="h6" className="text-black fw-bold">
                <span>
                  Home {">"} {formatPath(location.pathname)}
                </span>
              </Typography>
            </Box>
          </Box>
          <Container>
            {/* ------------------------------------------- */}
            <Grid container spacing={4} className="mt-4">
              <Grid item xs={12} md={5}>
                <Box>
                  <img
                    src={selectedImage}
                    alt="Main Door"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      maxHeight: "280px",
                      objectFit: "fill",
                    }}
                  />
                  <Grid container spacing={2} sx={{ marginTop: "15px" }}>
                    {getEstimation?.productDetails?.images
                      .slice(0, maxVisibleImages)
                      .map((imageSrc, index) => (
                        <Grid item xs={4} key={index}>
                          <img
                            src={imageSrc}
                            alt={`Image ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "100px",
                              borderRadius: "5px",
                              objectFit: "fill",
                              cursor: "pointer",
                            }}
                            onClick={() => handleChangeImage(imageSrc)}
                          />
                        </Grid>
                      ))}
                    {remainingImages > 0 && (
                      <Grid
                        item
                        xs={4}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            sx={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              backgroundColor: "#1976d2",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "white",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            +{remainingImages}
                          </Box>
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                  <Typography variant="h5" className="fw-bold mt-3">
                    {getEstimation?.productDetails?.productName || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="w-75 mt-3"
                  >
                    {getEstimation?.productDetails?.description || "N/A"}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  className="mb-3"
                >
                  <Typography variant="h4" className="fw-bold">
                    Pricing
                  </Typography>
                  <Box>
                    <Box
                      sx={{ backgroundColor: "#F5F5F5", width: "200px" }}
                      className="text-white text-center rounded-1 p-2"
                    >
                      <Typography variant="h5" sx={{ color: "#FF0000", fontWeight:"bold" }}>$ {price.toFixed(2)}</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "10px" }}>
                      (According to Selected Options)
                    </Typography>
                  </Box>
                </Box>
                {!showCustomHeightWidth && (
                  <Button
                    onClick={() => setShowCustomHeightWidth(true)}
                    variant="outlined"
                    className="fw-bold"
                    sx={{ marginBottom: "10px", textTransform: "none" }}
                  >
                    Add Custom Height & Width
                  </Button>
                )}
                <Grid container spacing={2} className="mb-4">
                  {getEstimation?.dimensions &&
                    Object.entries(getEstimation.dimensions)
                      .filter(
                        ([key, dimension]) =>
                          Array.isArray(dimension.data) &&
                          dimension.data.length > 0
                      )
                      .map(([key, dimension]) => (
                        <Grid item xs={6} key={key}>
                          <InputLabel
                            className="fw-bold text-black"
                            id={`${key}-label`}
                          >
                            {dimension.label}
                          </InputLabel>
                          <FormControl
                            fullWidth
                            error={Boolean(errors[key])}
                            sx={{
                              marginBottom: errors[key] ? "10px" : "0",
                              ...(key === "color" && {
                                width: "100%",
                                display: "flex",
                              }),
                              ...(key === "Width_Inches_Fraction" ||
                              key === "Height_Inches_Fraction"
                                ? { opacity: showCustomHeightWidth ? 0.5 : 1 }
                                : {}),
                            }}
                            disabled={
                              showCustomHeightWidth &&
                              (key === "Width_Inches_Fraction" ||
                                key === "Height_Inches_Fraction")
                            }
                          >
                            <Select
                              displayEmpty
                              name={key}
                              labelId={`${key}-label`}
                              value={selectedOptions[key] || ""}
                              onChange={(e) =>
                                handleSelectChange(key, e.target.value)
                              }
                              sx={{
                                backgroundColor: "#D0E5F4",
                                borderRadius: "10px",
                                border: "none",
                                "& fieldset": { border: "none" },
                              }}
                              renderValue={(selected) => {
                                if (!selected) return <em>Select</em>;
                                return key === "color" ? (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    <span
                                      style={{
                                        display: "inline-block",
                                        width: "20px",
                                        height: "20px",
                                        backgroundColor: selected,
                                        borderRadius: "5px",
                                        border: "1px solid #ccc",
                                      }}
                                    ></span>
                                    {selected}
                                  </div>
                                ) : (
                                  selected
                                );
                              }}
                            >
                              {dimension?.data?.map((option, index) => (
                                <MenuItem key={index} value={option?.name}>
                                  {key === "color" ? (
                                    <>
                                      <span
                                        style={{
                                          display: "inline-block",
                                          width: "40px",
                                          height: "40px",
                                          backgroundColor: option.name,
                                          borderRadius: "5px",
                                          marginBottom: "8px",
                                        }}
                                      ></span>
                                      {option.name}
                                    </>
                                  ) : (
                                    option.name
                                  )}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {(key === "Width_Inches_Fraction" ||
                            key === "Height_Inches_Fraction") &&
                            showCustomHeightWidth && (
                              <>
                                {key === "Width_Inches_Fraction" && (
                                  <TextField
                                    label="Custom Width"
                                    variant="outlined"
                                    value={customWidth}
                                    onChange={(e) =>
                                      setCustomWidth(e.target.value)
                                    }
                                    sx={{ marginTop: "10px", width: "100%" }}
                                  />
                                )}
                                {key === "Height_Inches_Fraction" && (
                                  <TextField
                                    label="Custom Height"
                                    variant="outlined"
                                    value={customHeight}
                                    onChange={(e) =>
                                      setCustomHeight(e.target.value)
                                    }
                                    sx={{ marginTop: "10px", width: "100%" }}
                                  />
                                )}
                              </>
                            )}

                          {errors[key] && (
                            <Typography
                              variant="body2"
                              color="error"
                              sx={{ marginTop: "-8px", fontSize: "12px" }}
                            >
                              {errors[key]}
                            </Typography>
                          )}
                        </Grid>
                      ))}
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ margin: "20px 0" }} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ textAlign: "center" }} className="mb-4">
            <Button
              onClick={handleProceed}
              variant="contained"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Proceed <ArrowForwardIcon />
            </Button>
          </Box>
          <WindowContent />
        </>
      )}
    </div>
  );
};
export default Window;
