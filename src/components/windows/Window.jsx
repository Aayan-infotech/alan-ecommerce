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
} from "@mui/material";
import banner from "../../assets/doors.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card_img1 from "../../assets/window.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from '../../loader/Loader'

const basePrice = 0;

const Window = () => {
  const [getEstimation, setGetEstimation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    width: "",
    height: "",
    fraction: "",
    grid: "",
    finType: "",
    glassType: "",
    color: "",
    temperingOption: "",
    sideWindowOpens: "",
    installationOption: "",
    instructions: "",
  });
  const [selectedImage, setSelectedImage] = useState(card_img1);

  const [price, setPrice] = useState(null);
  const location = useLocation();
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
      const response = await axios.get(`http://44.196.192.232:5000/api/windows/getProduct/${subcategoryDetails?._id}`);
      if (response?.data?.success) {
        const productData = response.data.data.productDetails;
        setGetEstimation(response.data.data);
        setPrice(productData.price);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (subcategoryDetails?._id) {
      fetchDimensions();
    }
  }, [subcategoryDetails?._id])

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

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const calculatePrice = () => {
    let calculatedPrice = getEstimation?.productDetails?.price || 0;
    const selectedWidth = getEstimation?.dimensions?.width?.find(dim => dim.width === selectedOptions.width);
    const selectedHeight = getEstimation?.dimensions?.height?.find(dim => dim.height === selectedOptions.height);
    const selectedFraction = getEstimation?.dimensions?.fraction?.find(dim => dim.fraction === selectedOptions.fraction);
    const selectedGrid = getEstimation?.dimensions?.gridOptions?.find(dim => dim.gridOptions === selectedOptions.grid);
    const selectedFinType = getEstimation?.dimensions?.finType?.find(dim => dim.finType === selectedOptions.finType);
    const selectedGlassType = getEstimation?.dimensions?.glassType?.find(dim => dim.glassType === selectedOptions.glassType);
    const selectedColor = getEstimation?.dimensions?.color?.find(dim => dim.color === selectedOptions.color);
    const selectedTemperingOption = getEstimation?.dimensions?.temperingOptions?.find(dim => dim.temperingOptions === selectedOptions.temperingOption);
    const selectedSideWindowOpens = getEstimation?.dimensions?.sideWindowOpens?.find(dim => dim.sideWindowOpens === selectedOptions.sideWindowOpens);
    const selectedInstallationOption = getEstimation?.dimensions?.installationOption?.find(dim => dim.installationOption === selectedOptions.installationOption);

    // Add selected option prices to the base price
    if (selectedWidth) calculatedPrice += selectedWidth.price;
    if (selectedHeight) calculatedPrice += selectedHeight.price;
    if (selectedFraction) calculatedPrice += selectedFraction.price;
    if (selectedGrid) calculatedPrice += selectedGrid.price;
    if (selectedFinType) calculatedPrice += selectedFinType.price;
    if (selectedGlassType) calculatedPrice += selectedGlassType.price;
    if (selectedColor) calculatedPrice += selectedColor.price;
    if (selectedTemperingOption) calculatedPrice += selectedTemperingOption.price;
    if (selectedSideWindowOpens) calculatedPrice += selectedSideWindowOpens.price;
    if (selectedInstallationOption) calculatedPrice += selectedInstallationOption.price;

    setPrice(calculatedPrice);
  };


  useEffect(() => {
    if (getEstimation?.productDetails?.price) {
      calculatePrice();
    }
  }, [selectedOptions, getEstimation]);

  const maxVisibleImages = 5;
  const remainingImages = getEstimation?.productDetails?.images?.length - maxVisibleImages;

  const handleChangeImage = (imageSrc) => {
    setSelectedImage(imageSrc);
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

          {/* Categories Section */}
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
                  <img
                    src={selectedImage}
                    alt="Main Door"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      maxHeight: "280px",
                      objectFit: "fill"
                    }}
                  />
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
                            objectFit: "cover",
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

              {/* Right side - Customization Options */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Width <span style={{ fontSize: "10px" }}>(inch)</span>
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="width"
                        value={selectedOptions.width}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.width?.map((item, index) => (
                          <MenuItem key={index} value={item.width}>
                            {item.width}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Height <span style={{ fontSize: "10px" }}>(inch)</span>
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="height"
                        value={selectedOptions.height}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {/* <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>10</MenuItem> */}
                        {getEstimation?.dimensions?.height?.map((item, index) => (
                          <MenuItem key={index} value={item?.height}>
                            {item?.height}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Fraction{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="fraction"
                        value={selectedOptions.fraction}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.fraction?.map((item, index) => (
                          <MenuItem key={index} value={item?.fraction}>
                            {item?.fraction}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">Grid </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="grid"
                        value={selectedOptions.grid}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.gridOptions?.map((item, index) => (
                          <MenuItem key={index} value={item?.gridOptions}>
                            {item?.gridOptions}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Fin Type{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="finType"
                        value={selectedOptions.finType}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.finType?.map((item, index) => (
                          <MenuItem key={index} value={item?.finType}>
                            {item?.finType}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Glass Type{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="glassType"
                        value={selectedOptions.glassType}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.glassType?.map((item, index) => (
                          <MenuItem key={index} value={item?.glassType}>
                            {item?.glassType}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">Color</InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="color"
                        value={selectedOptions.color}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.color?.map((item, index) => (
                          <MenuItem key={index} value={item?.color}>
                            {item?.color}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Tempering Option{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="temperingOption"
                        value={selectedOptions.temperingOption}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.temperingOptions?.map((item, index) => (
                          <MenuItem key={index} value={item?.temperingOptions}>
                            {item?.temperingOptions}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Side Window Opens{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="sideWindowOpens"
                        value={selectedOptions.sideWindowOpens}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.sideWindowOpens?.map((item, index) => (
                          <MenuItem key={index} value={item?.sideWindowOpens}>
                            {item?.sideWindowOpens}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      Installation for San Diego. For installation in other areas,
                      please contact us.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ margin: "20px 0" }} />
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Installation Option{" "}
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        displayEmpty
                        name="installationOption"
                        value={selectedOptions.installationOption}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        <MenuItem value="">
                          <em>none</em>
                        </MenuItem>
                        {getEstimation?.dimensions?.installationOption?.map((item, index) => (
                          <MenuItem key={index} value={item?.installationOption}>
                            {item?.installationOption}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel className="fw-bold text-black">
                      Instruction, Questions or Comments?
                    </InputLabel>
                    <FormControl fullWidth>
                      <TextField
                        displayEmpty
                        name="instructions"
                        value={selectedOptions.instructions}
                        onChange={handleSelectChange}
                        renderValue={(selected) => {
                          return selected ? selected : "Select";
                        }}
                        sx={{
                          backgroundColor: "#D0E5F4",
                          borderRadius: "10px",
                          border: "none",
                          "& fieldset": {
                            border: "none",
                          },
                        }}
                      >
                        {/* <MenuItem value="">
                      <em>none</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem> */}
                      </TextField>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          <Box sx={{ textAlign: "center" }} className="mb-5 mt-5">
            <Link to="/measured-windows">
              <Button variant="contained" size="large" sx={{ textTransform: "none" }}>
                Proceed <ArrowForwardIcon />
              </Button>
            </Link>
          </Box>
        </>
      )}
    </div>
  );
};
export default Window;
