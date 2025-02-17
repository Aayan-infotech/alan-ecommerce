import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../../loader/Loader";

const SearchProductList = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const searchResults = location.state?.results || {};

    const isEmptyProducts = searchResults?.products?.length === 0;
    const isEmptySubCategories = searchResults?.subCategories?.length === 0;
    const isEmptySubSubCategories = searchResults?.subSubCategories?.length === 0;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <Loader />;
    }

    const handleClick = (product, subCategory, subSubCategory) => {
        if (product) {
            navigate(`/dimensions/${product?._id}`);
        } else if (subCategory) {
            navigate(`/sub-sub-categories/${subCategory?._id}`, {
                state: { categorydetails: subCategory },
            });
        } else if (subSubCategory) {
            navigate(`/allsubproducts/${subSubCategory._id}`);
        }
    };


    return (
        <div className="mb-4">
            <Container sx={{ mt: 4 }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <Typography variant="h5" className="fw-bold">Details</Typography>
                </div>
                {isEmptyProducts && isEmptySubCategories && isEmptySubSubCategories ? (
                    <p>No results found.</p>
                ) : (
                    <>
                        {/* Products */}
                        {searchResults?.products?.length > 0 && (
                            <Grid container spacing={2}>
                                {searchResults.products.map((product, index) => (
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
                                            onClick={() => handleClick(product, null, null)}
                                        >
                                            <Box
                                                component="img"
                                                className="p-3"
                                                src={product?.images[0] || "path/to/placeholder-image.jpg"}
                                                alt={product?.name || "Product Image"}
                                                sx={{
                                                    width: "100%",
                                                    height: "300px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                            <p className="fw-bold">{product?.name || "N/A"}</p>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {/* Sub Categories */}
                        {searchResults?.subCategories?.length > 0 && (
                            <div>
                                <Typography variant="h6">Sub Categories</Typography>
                                <Grid container spacing={2}>
                                    {searchResults.subCategories.map((subCategory, index) => (
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
                                                onClick={() => handleClick(null, subCategory, null)}
                                            >
                                                <Box
                                                    component="img"
                                                    className="p-3"
                                                    src={subCategory?.images[0] || "path/to/placeholder-image.jpg"}
                                                    alt={subCategory?.name || "SubCategory Image"}
                                                    sx={{
                                                        width: "100%",
                                                        height: "300px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                                <p className="fw-bold">{subCategory?.name || "N/A"}</p>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        )}

                        {/* Sub Sub Categories */}
                        {searchResults?.subSubCategories?.length > 0 && (
                            <div>
                                <Typography variant="h6">Sub Sub Categories</Typography>
                                <Grid container spacing={2}>
                                    {searchResults.subSubCategories.map((subSubCategory, index) => (
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
                                                onClick={() => handleClick(null, null, subSubCategory)}
                                            >
                                                <Box
                                                    component="img"
                                                    className="p-3"
                                                    src={subSubCategory?.images[0] || "path/to/placeholder-image.jpg"}
                                                    alt={subSubCategory?.name || "SubSubCategory Image"}
                                                    sx={{
                                                        width: "100%",
                                                        height: "300px",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                                <p className="fw-bold">{subSubCategory?.name || "N/A"}</p>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </div>
                        )}
                    </>
                )}
            </Container>
        </div>
    );
};

export default SearchProductList;
