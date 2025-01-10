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
  const [showCustomHeightWidth, setShowCustomHeightWidth] = useState(false);
  const [customDimensions, setCustomDimensions] = useState({
    height: "",
    width: "",
  });

  const [currentProductDetails, setCurrentProductDetails] = useState({});
  const [currentProductDimensions, setCurrentProductDimensions] =
    useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { product_id } = useParams();

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
        `http://44.196.64.110:7878/api/dims/ProductID/${product_id}`
      );
      if (response?.data?.success) {
        setSelectedImage(response.data.data?.product?.images[0]);
        setCurrentProductDetails(response.data.data);
        setCurrentProductDimensions(response.data.data?.Dimensions);
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

  const handleCustomHeightWidthToggle = () => {
    setShowCustomHeightWidth((prev) => !prev);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomDimensions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (category, value, name) => {
    console.log(name, "abimash");
    setSelectedOptions({
      ...selectedOptions,
      [category]: { value, name },
    });
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
    if (!currentProductDetails?.product) return 0;
    
    let price = currentProductDetails.product.price;
    
    Object.keys(selectedOptions).forEach((category) => {
      const selectedOption = selectedOptions[category];
      if (currentProductDimensions && currentProductDimensions[category]) {
        const selectedItem = currentProductDimensions[category].find(
          (item) => item[category] === selectedOption.name
        );
        if (selectedItem) {
          const percentage = parseFloat(selectedItem.value);  
          price += (price * percentage) / 100;
        }
      }
    });
    
    return price.toFixed(2);
  };
  

  const handleProceed = () => {
    const totalPrice = calculatePrice();
    const allSelectedOptionsDetails = {
      selectedOptions,
      customDimensions,
      selectedImage,
      totalPrice,
      currentProductDetails,
    };
    navigate("/measured-windows", { state: allSelectedOptionsDetails });
  };

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
                    {currentProductDetails?.product?.name || "N/A"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="w-75 mt-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        currentProductDetails?.product?.Description || "N/A",
                    }}
                  />
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
                <Button
                  onClick={handleCustomHeightWidthToggle}
                  variant="outlined"
                  className="fw-bold"
                  sx={{ marginBottom: "10px", textTransform: "none" }}
                >
                  Add Custom Height & Width
                </Button>
                {showCustomHeightWidth && (
                  <div className="row ma-0 gy-3 mb-3">
                    <div className="col-12 col-md-6">
                      <label htmlFor="height fw-bold">Height</label>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={customDimensions.height}
                        onChange={handleInputChange}
                        className="form-control p-3"
                        placeholder="Enter height"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="width fw-bold">Width</label>
                      <input
                        type="number"
                        id="width"
                        name="width"
                        value={customDimensions.width}
                        onChange={handleInputChange}
                        className="form-control p-3"
                        placeholder="Enter width"
                      />
                    </div>
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
                            // handleSelectChange(category, e.target.value)
                            handleSelectChange(
                              category,
                              e.target.value,
                              e.target.selectedOptions[0].text
                            )
                          }
                        >
                          <option selected>
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
                          <div className="mb-2 text-danger fw-bold">
                            Installation for San Diego. For installation in
                            other areas, please contact us.
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <Box sx={{ textAlign: "center" }} className="my-4">
              <Button
                onClick={handleProceed}
                variant="contained"
                size="large"
                sx={{ textTransform: "none" }}
              >
                Proceed <ArrowForwardIcon />
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
