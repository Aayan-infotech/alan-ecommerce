import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import banner from "../../assets/doors.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import No_Image_Available from "../../assets/No_Image_Available.jpg";
import Loader from '../../loader/Loader'

const Categories = () => {
  const [exploreCategories, setExploreCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  const location = useLocation();

  const navigate = useNavigate();

  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .slice(0, -1)
      .map((segment) =>
        segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase())
      )
      .join(" > ");
  };

  const fetchExploreSubCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://44.196.192.232:5000/api/category/get-subcategory/${categoryId}`);
      if (response?.data?.status === 200) {
        console.log(response?.data?.data, 'response?.data?.data')
        setExploreCategories(response?.data?.data);
        setErrorMessage("");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchExploreSubCategories();
    }
  }, [categoryId]);

  const handleClick = (subcategoryDetails) => {
    navigate("/windows", { state: { subcategoryDetails: subcategoryDetails } });
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
              {exploreCategories?.map((category, index) => (
                <Typography key={index} variant="h2" className="text-black fw-bold">
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
              <Typography variant="h6" color="error" textAlign="center" sx={{ mt: 2 }}>
                {errorMessage}
              </Typography>
            ) : (
              <Grid container spacing={2}>
                {exploreCategories?.map((category, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    {/* <Link to="/windows" className="text-decoration-none"> */}
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
                      onClick={() => handleClick(category)}
                    >
                      <Box
                        component="img"
                        src={category?.productDetails?.images || No_Image_Available}
                        alt={category?.productDetails?.subcategoryName}
                        sx={{
                          width: "100%",
                          height: "300px",
                          objectFit: "fill",
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
                          {category?.productDetails?.productName || 'N/A'}
                        </Typography>
                      </Box>
                    </Box>
                    {/* </Link> */}
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

export default Categories;
