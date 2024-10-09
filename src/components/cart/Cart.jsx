import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import card_img4 from "../../assets/card_img4.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (operation) => {
    setQuantity((prevQuantity) =>
      operation === "increment"
        ? prevQuantity + 1
        : prevQuantity > 1
        ? prevQuantity - 1
        : 1
    );
  };

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

  return (
    <div className="doors-container px-3 mb-4">
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
            Cart
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container className="mt-4">
        <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={2}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    alt="Golden Door"
                    image={card_img1}
                    className="me-2"
                    sx={{ borderRadius: 1, objectFit: "contain", maxWidth: 50 }}
                  />
                  <Typography className="fw-bold">Golden Door</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography component="div" className="fw-bold">
                  Price: <span style={{ color: "gray" }}>$200</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" className="text-black fw-bold">
                    Quantity:
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange("decrement")}>
                    <RemoveCircleOutlineIcon sx={{ color: "black" }} />
                  </IconButton>
                  <Typography
                    className="p-2 border border-2 rounded-1"
                    sx={{
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange("increment")}>
                    <ControlPointIcon sx={{ color: "black" }} />
                  </IconButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Typography component="div" className="fw-bold">
                  Subtotal: <span style={{ color: "gray" }}>$200</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Link to="/checkout">
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "black", color: "black" }}
                    className="rounded-3"
                  >
                    Check Out
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="primary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default Cart;
