import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Button,
  Fab,
} from "@mui/material";
import banner from "../../assets/doors.png";
import card_img1 from "../../assets/window.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";
import { useLocation } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const orders = [
  {
    id: "678dee7d0f616dbf38d09cd3",
    date: "2025-01-22 : 05:27 PM",
    total: 150.75,
    status: "Paid",
    products: [
      {
        name: "Product 1",
        price: 50.25,
        quantity: 2,
        subtotal: 100.5,
        image: card_img1,
      },
      {
        name: "Product 2",
        price: 25.12,
        quantity: 2,
        subtotal: 50.24,
        image: card_img3,
      },
    ],
    payment: {
      method: "Credit Card",
      cardLast4: "1234",
      billingAddress: "123 Main St, New York, NY, USA",
      status: "Paid",
    },
  },
  {
    id: "678dee7d0f616dbf38d09cd3",
    date: "2025-01-20 : 11:07 PM",
    total: 75.5,
    status: "Processing",
    products: [
      {
        name: "Product 3",
        price: 25.5,
        quantity: 3,
        subtotal: 75.5,
        image: card_img1,
      },
    ],
    payment: {
      method: "PayPal",
      cardLast4: null,
      billingAddress: "456 Elm St, Los Angeles, CA, USA",
      status: "Pending",
    },
  },
];

const OrderHistory = () => {
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
            Orders
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container className="mt-4">
        <Typography variant="h4" gutterBottom className="fw-bold mb-3">
          Total Orders&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <Fab
            color="primary"
            size="small"
            className="fw-bold"
          >
            {orders.length > 0 ? orders.length : "No Orders"}
          </Fab>
        </Typography>
        {orders.map((order, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography component="span">
                Order #{order.id} - {order.date}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box mb={2}>
                    <Typography variant="h6">Product Details</Typography>
                    <Divider />
                    {order.products.map((product, idx) => (
                      <Box key={idx} mb={2}>
                        <Grid container spacing={2}>
                          <Grid item xs={4}>
                            <img
                              src={product.image}
                              alt={product.name}
                              height="100"
                              style={{ width: "100%", borderRadius: "8px" }}
                            />
                          </Grid>
                          <Grid item xs={8}>
                            <Typography>
                              <strong>{product.name}</strong>
                            </Typography>
                            <Typography>
                              Price: ${product.price.toFixed(2)}
                            </Typography>
                            <Typography>
                              Quantity: {product.quantity}
                            </Typography>
                            <Typography>
                              Subtotal: ${product.subtotal.toFixed(2)}
                            </Typography>
                          </Grid>
                        </Grid>
                        {idx !== order.products.length - 1 && <Divider />}
                      </Box>
                    ))}
                  </Box>
                </Grid>

                {/* Order Overview Column */}
                <Grid item xs={12} md={4}>
                  <Box mb={2}>
                    <Typography variant="h6">Order Overview</Typography>
                    <Divider />
                    <Box mt={1}>
                      <Typography>
                        <strong>Order ID:</strong> {order.id}
                      </Typography>
                      <Typography>
                        <strong>Date:</strong> {order.date}
                      </Typography>
                      <Typography>
                        <strong>Total:</strong> ${order.total.toFixed(2)}
                      </Typography>
                      <Typography>
                        <strong>Status:</strong> {order.status}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Payment Details Column */}
                <Grid item xs={12} md={4}>
                  <Box mb={2}>
                    <Typography variant="h6">Payment Details</Typography>
                    <Divider />
                    <Box mt={1}>
                      <Typography>
                        <strong>Method:</strong> {order.payment.method}
                      </Typography>
                      {order.payment.cardLast4 && (
                        <Typography>
                          <strong>Card Last 4:</strong> ****{" "}
                          {order.payment.cardLast4}
                        </Typography>
                      )}
                      <Typography>
                        <strong>Billing Address:</strong>{" "}
                        {order.payment.billingAddress}
                      </Typography>
                      <Typography>
                        <strong>Payment Status:</strong> {order.payment.status}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default OrderHistory;
