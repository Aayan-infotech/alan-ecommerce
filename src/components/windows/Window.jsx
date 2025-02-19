import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  // Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Divider,
  Snackbar,
  SnackbarContent,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../loader/Loader";
import WindowContent from "./WindowContent";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import LinearProgress from "@mui/material/LinearProgress";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import {
  addtocartproduct,
  fetchAllProducts,
} from "../redux/slices/addToCartSlice";
import Cookies from "js-cookie";
import useSessionId from "../../hooks/useSessionId";
import CloseIcon from "@mui/icons-material/Close";

const customStyles = {
  outline: "none",
  boxShadow: "none",
  borderColor: "inherit",
  backgroundColor: "#D0E5F4",
  border: 0,
};

const Window = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedImage, setSelectedImage] = useState(card_img1);
  const [customDimensions, setCustomDimensions] = useState({
    height: "",
    width: "",
  });

  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [currentProductDimensions, setCurrentProductDimensions] =
    useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [customPrice, setCustomPrice] = useState(null);
  const [gardenWindowUpdatedPrice, setGardenWindowUpdatedPrice] = useState(null);
  const [formError, setFormError] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCalculatingGardenWindow, setIsCalculatingGardenWindow] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [dimensionError, setDimensionError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const location = useLocation();
  const navigate = useNavigate();
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const sessionId = useSessionId();
  const token = Cookies.get("alanAuthToken");
  const userLoggedInId = Cookies.get("userLoggedInId");

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .map((segment, index, array) => {
        if (
          segment.toLowerCase() === "dimensions" &&
          index === array.length - 2
        ) {
          return "Product Dimensions";
        }
        if (index === array.length - 1 && /^[a-f0-9]{24}$/i.test(segment)) {
          return null;
        }
        return segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
      })
      .filter(Boolean)
      .join(" > ");
  };

  const fetchProductsByDimensions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://54.236.98.193:7878/api/dims/ProductID/${product_id}`
      );
      if (response?.data?.success) {
        setSelectedImage(response.data.data?.product?.images[0]);
        setCurrentProductDetails(response.data.data);
        setCurrentProductDimensions(response?.data?.data?.Dimensions);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (product_id) {
      fetchProductsByDimensions();
    }
  }, [product_id]);

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setCustomDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "height" || name === "width") {
      const { height, width } = { ...customDimensions, [name]: value };
      if (height && width) {
        setFormError(false);
        setIsCalculating(true);
        setDimensionError(null);
        try {
          const response = await axios.post(
            "http://54.236.98.193:7878/api/prodFormula/calculateCustomHeightWidth",
            {
              width: parseFloat(width),
              height: parseFloat(height),
              Product_id: product_id,
              Price: currentProductDetails?.product?.price || 0,
            }
          );
          if (response?.data?.success === false) {
            setDimensionError(response?.data?.message || "Invalid dimensions.");
            setCustomPrice(null);
          } else {
            setCustomPrice(response.data.data.totalPrice);
            setDimensionError(null); // Clear error on success
          }
        } catch (error) {
          setCustomPrice(null);
        } finally {
          setIsCalculating(false);
        }
      } else {
        setFormError(true);
      }
    }
  };
  console.log(dimensionError, 'dimensionError')

  const handleSelectChange = async (category, value, name) => {
    const updatedOptions = {
      ...selectedOptions,
      [category]: { value, name },
    };
    setSelectedOptions(updatedOptions);
    const color = updatedOptions["Color"]?.name;
    const widthHeight = updatedOptions["widthHeight"]?.name;
    if (currentProductDetails?.product?.name === "Garden_window" && color && widthHeight) {
      setIsCalculatingGardenWindow(true);
      try {
        const response = await axios.put(
          "http://54.236.98.193:7878/api/dimsColor/updateAmount",
          {
            Color: color,
            widthHeight: widthHeight,
            amount: currentProductDetails.product.price || 0,
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );
        if (response?.data?.success) {
          const updatedPrice = response?.data?.data?.totalAmount;
          setGardenWindowUpdatedPrice(updatedPrice || 0);
        }
      } catch (error) {
        console.error("Error updating price:", error);
      } finally {
        setIsCalculatingGardenWindow(false);
      }
    }
  };

  const maxVisibleImages = 2;
  const images = currentProductDetails?.images || [];
  const primaryImage =
    currentProductDetails?.product?.images[0] || images[0] || "";
  const remainingImages =
    images.length > maxVisibleImages ? images.length - maxVisibleImages : 0;

  const handleChangeImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const calculatePrice = () => {
    if (!currentProductDetails?.product) return "0.00";
    if (gardenWindowUpdatedPrice) {
      return gardenWindowUpdatedPrice.toFixed(2);
    }
    let basePrice = parseFloat(
      customPrice || currentProductDetails.product.price || 0
    );
    if (customPrice) {
      basePrice = parseFloat(customPrice);
    }
    Object.keys(selectedOptions).forEach((category) => {
      const selectedOption = selectedOptions[category];
      if (currentProductDimensions && currentProductDimensions[category]) {
        const selectedItem = currentProductDimensions[category].find(
          (item) => item[category] === selectedOption.name
        );
        if (selectedItem) {
          const value = selectedItem.value;
          if (value === "" || value === null) {
            basePrice += parseFloat(selectedItem.amount);
          } else {
            const percentage = parseFloat(selectedItem.value);
            basePrice += (basePrice * percentage) / 100;
          }
        }
      }
    });
    return basePrice.toFixed(2);
  };

  const handleToProceedAddToCart = async () => {
    setBtnLoader(true);
    if (!userLoggedInId && !sessionId) {
      setSnackbarMessage("Session ID is required for guest checkout.");
      setOpenSnackbar(true);
      setBtnLoader(false);
      return;
    }
    const totalPrice = calculatePrice();
    const productDetails = {
      // session_id: sessionId,
      totalPrice,
      product_price: currentProductDetails?.product?.price || 0,
      product_id: currentProductDetails?.product?._id || "",
      name: currentProductDetails?.product?.name || "",
      sku: currentProductDetails?.product?.sku || "",
      images: currentProductDetails?.product?.images || [],
      selectedOptions,
      customDimensions,
      ...(userLoggedInId ? { user_id: userLoggedInId } : { session_id: sessionId }),
    };
    try {
      const response = await dispatch(addtocartproduct(productDetails));
      const responseMessage =
        response.payload?.message || "Item added to cart successfully!";
      setSnackbarMessage(responseMessage);
      setOpenSnackbar(true);
      dispatch(fetchAllProducts());
      setSelectedOptions({});
      setCustomDimensions({ height: "", width: "" });
      setCustomPrice(null);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setSnackbarMessage("Failed to add item to cart.");
      setOpenSnackbar(true);
    } finally {
      setBtnLoader(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="doors-container px-3">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          message={snackbarMessage}
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
          }}
          action={
            <IconButton
              size="small"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </Snackbar>
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
                Products
              </Typography>
              <Typography variant="h6" className="text-black fw-bold">
                <span>
                  Home {">"} {formatPath(location.pathname)}
                </span>
              </Typography>
            </Box>
          </Box>
          {/* {isCalculating && <LinearProgress sx={{ marginBottom: 2 }} />} */}
          {(isCalculating || isCalculatingGardenWindow) && (
            <LinearProgress sx={{ marginBottom: 2 }} />
          )}
          <Container>
            <div className="row gy-3 gy-md-4 my-2">
              <div className="col-12 col-md-5">
                <Box>
                  <img
                    src={selectedImage || primaryImage || No_Image_Available}
                    alt="Main Door"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      maxHeight: "280px",
                      objectFit: "contain",
                    }}
                    onError={(e) => e.target.src = No_Image_Available}
                  />
                  <Grid container spacing={2} sx={{ marginTop: "15px" }}>
                    {images
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
                    {/* {currentProductDetails?.product?.name || "N/A"} */}
                    {currentProductDetails?.product?.name
                      ? currentProductDetails.product?.name
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (char) => char.toUpperCase())
                      : "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: isExpanded
                          ? currentProductDetails?.product?.Description || "N/A"
                          : (currentProductDetails?.product?.Description || "N/A").slice(0, maxLength) + (currentProductDetails?.product?.Description?.length > maxLength ? "..." : ""),
                      }}
                    />
                    {currentProductDetails?.product?.Description?.length > maxLength && (
                      <button
                        onClick={toggleDescription}
                        style={{
                          border: "none",
                          background: "none",
                          color: "blue",
                          cursor: "pointer",
                          paddingLeft: "5px",
                        }}
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </Typography>
                </Box>
              </div>
              <div className="col-12 col-md-7">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Typography variant="h4" className="fw-bold">
                    Pricing
                  </Typography>
                  <Box>
                    <Box
                      sx={{ backgroundColor: "#F5F5F5", width: "200px" }}
                      className="text-white text-center rounded-1 p-2"
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: "#FF0000", fontWeight: "bold" }}
                      >
                        ${calculatePrice()}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "10px" }}>
                      (According to Selected Options)
                    </Typography>
                  </Box>
                </div>
                {currentProductDetails?.product?.productFormulaAdded?.toLowerCase() !==
                  "no" && (
                    <div className="row ma-0 gy-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="height" className="fw-bold mb-2">
                          Height <span style={{ fontSize: "10px" }}>(inch)</span>
                        </label>
                        <input
                          type="number"
                          id="height"
                          name="height"
                          value={customDimensions.height}
                          onChange={handleInputChange}
                          className="form-control p-3"
                          placeholder="Enter height"
                          style={customStyles}
                        />
                        {formError && !customDimensions.height && (
                          <Typography
                            variant="body2"
                            sx={{ color: "red", fontSize: "12px" }}
                          >
                            Height is required for price calculation.
                          </Typography>
                        )}
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="width" className="fw-bold mb-2">
                          Width <span style={{ fontSize: "10px" }}>(inch)</span>
                        </label>
                        <input
                          type="number"
                          id="width"
                          name="width"
                          value={customDimensions.width}
                          onChange={handleInputChange}
                          className="form-control p-3"
                          placeholder="Enter width"
                          style={customStyles}
                        />
                        {formError && !customDimensions.width && (
                          <Typography
                            variant="body2"
                            sx={{ color: "red", fontSize: "12px" }}
                          >
                            Width is required for price calculation.
                          </Typography>
                        )}
                      </div>
                    </div>
                  )}
                {dimensionError && (
                  <div className="col-12 mb-3">
                    <Typography variant="body2" sx={{ color: "red", fontSize: "14px" }}>
                      {dimensionError}
                    </Typography>
                  </div>
                )}
                <div className="row ma-0 gy-3">
                  {currentProductDimensions &&
                    Object.keys(currentProductDimensions).map((category) => (
                      <div className="col-12 col-md-6" key={category}>
                        <label
                          htmlFor={`select-${category}`}
                          className="form-label fw-semibold mb-2"
                        >
                          {category.charAt(0).toUpperCase() +
                            category
                              .slice(1)
                              .replace(/([a-z])([A-Z])/g, "$1 $2")}
                        </label>
                        <select
                          className="form-select p-3"
                          style={customStyles}
                          aria-label={`Select ${category}`}
                          onChange={(e) =>
                            handleSelectChange(
                              category,
                              e.target.value,
                              e.target.selectedOptions[0].text
                            )
                          }
                        >
                          <option>
                            Select{" "}
                            {category.charAt(0).toUpperCase() +
                              category
                                .slice(1)
                                .replace(/([a-z])([A-Z])/g, "$1 $2")}
                          </option>
                          {currentProductDimensions[category].map((item) => (
                            <option key={item._id} value={item.value}>
                              {item[category]}
                            </option>
                          ))}
                        </select>
                        {category === "installation" && (
                          <Typography
                            variant="body2"
                            className="mb-2 text-danger fw-bold"
                          >
                            Installation for San Diego. For installation in
                            other areas, please contact us.
                          </Typography>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <Box sx={{ textAlign: "center" }} className="my-4">
              <Button
                variant="contained"
                size="large"
                onClick={handleToProceedAddToCart}
                sx={{ textTransform: "none" }}
              >
                {btnLoader ? (
                  <span>Adding...</span>
                ) : (
                  <span>
                    Add To Cart&nbsp;&nbsp;
                    <ShoppingCartIcon
                      className="fs-5"
                      style={{ marginLeft: "8px" }}
                    />
                  </span>
                )}
              </Button>
            </Box>
          </Container>
          <WindowContent />
        </>
      )}
    </div>
  );
};
export default Window;
