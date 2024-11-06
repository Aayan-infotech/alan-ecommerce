import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import banner from "../../assets/doors.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  const product_type = location.state.categories;

  const navigate = useNavigate();

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

  // const handleClick = (item) => {
  //   navigate("/windows", { state: { categoriesdetails: item } });
  // };

  return (
    <div className="doors-container px-3 mb-4">
      {/* Banner Section */}
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
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {product_type?.Categories?.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link to="/windows" className="text-decoration-none">
                <Box
                  sx={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    textAlign: "center",
                    position: "relative",
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                    backgroundColor: "aliceblue",
                    maxWidth: "330px",
                    width: "100%",
                  }}
                  // onClick={() => handleClick(category)}
                >
                  <Box
                    component="img"
                    src={category.image}
                    alt={category.cat_name}
                    sx={{
                      width: "100%",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{
                      backgroundColor: "#FC5F03CC",
                      padding: "10px",
                      color: "white",
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      textAlign: "center",
                      fontWeight: "bold",
                      maxHeight: "100px",
                      height: "100%",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Typography variant="h5" className="fw-bold text-white">
                      {category.cat_name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Categories;
