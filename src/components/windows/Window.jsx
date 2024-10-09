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
} from "@mui/material";
import banner from "../../assets/doors.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import card_img1 from "../../assets/window.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useLocation } from "react-router-dom";

const basePrice = 0;

export const Window = () => {
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
  const [price, setPrice] = useState(basePrice);
  const location = useLocation();
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
    let calculatedPrice = basePrice;

    // Example pricing logic based on selections
    if (selectedOptions.width)
      calculatedPrice += parseInt(selectedOptions.width);
    if (selectedOptions.height)
      calculatedPrice += parseInt(selectedOptions.height);
    if (selectedOptions.fraction)
      calculatedPrice += parseInt(selectedOptions.fraction);
    if (selectedOptions.grid) calculatedPrice += parseInt(selectedOptions.grid);
    if (selectedOptions.finType)
      calculatedPrice += parseInt(selectedOptions.finType);
    if (selectedOptions.glassType)
      calculatedPrice += parseInt(selectedOptions.glassType);
    if (selectedOptions.color)
      calculatedPrice += parseInt(selectedOptions.color);
    if (selectedOptions.temperingOption)
      calculatedPrice += parseInt(selectedOptions.temperingOption);
    if (selectedOptions.sideWindowOpens)
      calculatedPrice += parseInt(selectedOptions.sideWindowOpens);
    if (selectedOptions.installationOption)
      calculatedPrice += parseInt(selectedOptions.installationOption);

    setPrice(calculatedPrice);
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedOptions]);

  return (
    <div className="doors-container px-3">
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
        }}
        className="text-white p-2 rounded-3 doors-title-list"
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
                src={card_img1}
                alt="Main Door"
                style={{
                  width: "100%",
                  borderRadius: "5px",
                  maxHeight: "200px",
                }}
              />
              <Grid container spacing={2} sx={{ marginTop: "15px" }}>
                {[
                  card_img1,
                  card_img2,
                  card_img3,
                  card_img1,
                  card_img2,
                  card_img3,
                ].map((imageSrc, index) => (
                  <Grid item xs={4} key={index}>
                    <img
                      src={imageSrc}
                      alt={`Door preview ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "5px",
                      }}
                    />
                  </Grid>
                ))}
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
                      return selected ? selected : "Width";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Width</em>
                    </MenuItem>
                    <MenuItem value={10}>5</MenuItem>
                    <MenuItem value={20}>7</MenuItem>
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
                      return selected ? selected : "Height";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Height</em>
                    </MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>10</MenuItem>
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
                      return selected ? selected : "Fraction";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Fraction</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Grid";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Grid</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Fin Type";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Fin Type</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Glass Type";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Glass Type</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} className="mb-4">
              <Grid item xs={6}>
                <InputLabel className="fw-bold text-black">Color </InputLabel>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    name="color"
                    value={selectedOptions.color}
                    onChange={handleSelectChange}
                    renderValue={(selected) => {
                      return selected ? selected : "Color";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Color</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Tempering Option";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Tempering Option</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Side Window Opens";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Side Window Opens</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
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
                      return selected ? selected : "Installation Option";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Installation Option</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <InputLabel className="fw-bold text-black">
                  Instruction, Questions or Comments?
                </InputLabel>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    name="instructions"
                    value={selectedOptions.instructions}
                    onChange={handleSelectChange}
                    renderValue={(selected) => {
                      return selected ? selected : "Instructions";
                    }}
                    sx={{ backgroundColor: "#D0E5F4" }}
                  >
                    <MenuItem value="">
                      <em>Instructions</em>
                    </MenuItem>
                    <MenuItem value={10}>20</MenuItem>
                    <MenuItem value={24}>5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ textAlign: "center" }} className="mb-5 mt-5">
        <Link to="/measured-windows">
          <Button variant="contained" size="large">
            Proceed <ArrowForwardIcon />
          </Button>
        </Link>
      </Box>
    </div>
  );
};
// export default Window;
