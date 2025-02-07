import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import successfully from "../../assets/successfully.png";
import { Link, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";

export const Successfully = () => {
  const [searchParams] = useSearchParams();
  const session_id = searchParams.get("session_id");
  const token = Cookies.get("alanAuthToken");
  const userLoggedInId = Cookies.get("userLoggedInId");

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        if (!session_id) return;
        const response = await axios.get(
          "http://loc:7878/api/payment/completePayment",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log("Payment Details:", response.data);
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };
    fetchPaymentDetails();
  }, [session_id, token]);

  return (
    <div>
      <Container sx={{ mt: 5, mb: 4 }}>
        <Typography variant="h4" align="center" className="fw-bold text-black">
          Payment Successful
        </Typography>
        <Box className="text-center">
          <img src={successfully} height={150} />
        </Box>
        <Typography variant="h4" align="center" className="fw-bold text-black">
          Your Payment have been successful!
        </Typography>
        <Box className="text-center mt-3">
          <Link to="/order-history">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "150px" }}
              className="fw-bold text-capitalize me-2"
            >
              Orders
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};
