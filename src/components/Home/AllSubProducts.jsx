import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import banner from "../../assets/doors.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import Loader from "../../loader/Loader";

const AllSubProducts = () => {
  const [subsubCategories, setSubsubCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { products_id } = useParams();
  const { subCategory_id } = useParams();
  const location = useLocation();
  const { categorydetails } = location.state || {};

  const navigate = useNavigate();

  const formatPath = (path) => {
    const pathMapping = {
      allsubproducts: "Products",
    };
    return path
      .split("/")
      .filter(Boolean)
      .slice(0, -1)
      .map(
        (segment) =>
          pathMapping[segment.toLowerCase()] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ");
  };

  const fetchExploreSubCategories = async () => {
    setLoading(true);
    try {
      let response;
      if (categorydetails?.type === "category") {
        response = await axios.get(
          `http://44.196.64.110:7878/api/products/type/category/id/${products_id}`
        );
      } else {
        response = await axios.get(
          `http://44.196.64.110:7878/api/products/type/subSubCategory/id/${products_id}`
        );
      }
      if (response?.data?.status === 200) {
        setSubsubCategories(response?.data?.data);
        setErrorMessage("");
      } else {
        setErrorMessage(response?.data?.message);
      }
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message || "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (products_id) {
      fetchExploreSubCategories();
    }
  }, [products_id]);

  const handleClick = (category) => {
    navigate(`/dimensions/${category?._id}`);
  };

  return (
    <div className="doors-container px-3 mb-4">
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
              {subsubCategories?.map((category, index) => (
                <Typography
                  key={index}
                  variant="h5"
                  className="text-black fw-bold"
                >
                  {category.subcategoryName}
                </Typography>
              ))}
              <Typography variant="h6" className="text-black fw-bold">
                <span>
                  Home {">"} {formatPath(location.pathname)}
                </span>
              </Typography>
            </Box>
          </Box>
          <Container sx={{ mt: 4 }}>
            {errorMessage ? (
              <Typography
                variant="h6"
                color="error"
                textAlign="center"
                sx={{ mt: 2 }}
              >
                {errorMessage}
              </Typography>
            ) : (
              <Grid container spacing={2}>
                {subsubCategories?.map((category, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Box
                      sx={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        textAlign: "center",
                        position: "relative",
                        backgroundColor: "#f1f1f1",
                        width: "100%",
                      }}
                      className="rounded-3 p-2"
                      onClick={() => handleClick(category)}
                    >
                      <Box
                        component="img"
                        className="p-3"
                        src={category?.images || No_Image_Available}
                        alt={category?.name}
                        sx={{
                          width: "100%",
                          height: "300px",
                          objectFit: "fill",
                        }}
                      />
                      <p className="fw-bold mb-0">
                        {category?.name || "N/A"}
                      </p>
                      <span>
                        Sale:&nbsp;&nbsp;<h4 className="fw-bold text-danger d-inline">
                          ${category?.price || "N/A"}
                        </h4>
                      </span>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        </>
      )}
    </div>
  );
};

export default AllSubProducts;
