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

const Window = () => {
  const [getEstimation, setGetEstimation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedImage, setSelectedImage] = useState(card_img1);
  const [price, setPrice] = useState(0);

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
        `http://44.196.192.232:5000/api/windows/getProduct/${subcategoryDetails?._id}`
      );
      if (response?.data?.success) {
        const data = response.data.data;
        console.log(data, "data");
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

  const categories = [
    "Wood Entry Door",
    "Fiber Glass Entry Doors",
    "Vinyl Sliding Patio Doors",
    "Fiberglass French Doors",
    "French Wood Doors",
    "Vinyl Swinging French Door",
    "Hardware",
    "Other Doors",
  ];

  const handleSelectChange = (dimensionKey, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [dimensionKey]: value,
    }));
  };

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
    setPrice(calculatedPrice);
  };

  useEffect(() => {
    if (getEstimation) {
      calculatePrice();
    }
  }, [selectedOptions, getEstimation]);

  const maxVisibleImages = 5;
  const remainingImages =
    getEstimation?.productDetails?.images?.length - maxVisibleImages || 0;

  const handleChangeImage = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleProceed = () => {
    const allSelectedOptionsDetails = {
      selectedOptions,
      price,
      selectedImage,
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
          <Box
            sx={{
              backgroundColor: "#fc5f03",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              height: "50px",
            }}
            className="text-white p-1 rounded-3 doors-title-list"
          >
            <Typography className="title-size" sx={{ fontSize: "15px" }}>
              Select Category <ArrowForwardIosIcon className="fs-6" />
            </Typography>

            {categories.map((category, index) => (
              <Typography
                key={index}
                className="title-size"
                sx={{ fontSize: "15px" }}
              >
                {category}
              </Typography>
            ))}
          </Box>
          <Container>
            {/* ------------------------------------------- */}
            <Grid container spacing={4} className="mt-4">
              <Grid item xs={12} md={5}>
                <Box>
                  <img src={selectedImage} alt="Main Door" style={{ width: "100%", borderRadius: "5px", maxHeight: "280px", objectFit: "fill" }} />
                  <Grid container spacing={2} sx={{ marginTop: "15px" }}>
                    {getEstimation?.productDetails?.images.slice(0, maxVisibleImages).map((imageSrc, index) => (
                      <Grid item xs={4} key={index}>
                        <img
                          src={imageSrc}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100px",
                            borderRadius: "5px",
                            objectFit: "fill",
                            cursor: "pointer"
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
                    Wood Entry Doors
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className="w-75 mt-3"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className="mt-3"
                  >
                    <Typography variant="h4">Pricing</Typography>
                    <Box>
                      <Box
                        sx={{ backgroundColor: "black", width: "150px" }}
                        className="text-white text-center rounded-1"
                      >
                        <Typography variant="h4">$ {price}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "10px" }}>
                        (According to Selected Options)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Grid container spacing={2} className="mb-4">
                  {getEstimation?.dimensions &&
                    Object.entries(getEstimation.dimensions).map(
                      ([key, dimension]) => (
                        <Grid item xs={6} key={key}>
                          <InputLabel className="fw-bold text-black" id={`${key}-label`}>
                            {dimension.label}
                          </InputLabel>
                          <FormControl fullWidth>
                            <Select displayEmpty name="width" labelId={`${key}-label`} value={selectedOptions[key] || ""}
                              onChange={(e) => handleSelectChange(key, e.target.value)}
                              sx={{ backgroundColor: "#D0E5F4", borderRadius: "10px", border: "none", "& fieldset": { border: "none", }, }}>
                              <MenuItem value="">
                                <em>Select</em>
                              </MenuItem>
                              {dimension?.data?.map((option, index) => (
                                <MenuItem key={index} value={option?.name}>
                                  {option?.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      )
                    )}
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ margin: "20px 0" }} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ textAlign: "center" }} className="mb-5 mt-5">
            {/* <Link to="/measured-windows"> */}
              <Button onClick={handleProceed} variant="contained" size="large" sx={{ textTransform: "none" }}>
                Proceed <ArrowForwardIcon />
              </Button>
            {/* </Link> */}
          </Box>
        </>
      )}
    </div>
  );
};
export default Window;
