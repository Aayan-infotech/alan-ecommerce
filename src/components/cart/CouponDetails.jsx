import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Checkbox,
  Divider,
} from "@mui/material";
import vertical from "../../assets/vertical.png";
import horizontal from "../../assets/horizontal.png";

export const CouponDetails = () => {
  return (
    <Box mt={2}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Grid container alignItems="center">
            <Grid item xs={5} sx={{ pr: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", textDecoration: "underline", mb: 3 }}
              >
                Apply Coupon Code
              </Typography>
              <Typography
                variant="body6"
                className="fw-bold"
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
              >
                Sub Total <span>$600</span>
              </Typography>
              <Typography
                variant="body6"
                className="fw-bold"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "black",
                }}
              >
                Discount Offer{" "}
                <span style={{ color: "#00D300" }} className="fw-bold">
                  -$100
                </span>
              </Typography>
            </Grid>

            {/* Middle Divider */}
            <Grid
              item
              xs={12}
              sm={1}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={vertical} />
            </Grid>

            {/* Right Section */}
            <Grid
              item
              xs={5}
              sx={{
                pl: 3,
                textDecoration: "underline",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  delivery charges will be shared soon
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  Please acknowledge
                </Typography>
              </Box>
              <Checkbox
                sx={{
                  color: "#FC5F03",
                  "&.Mui-checked": {
                    color: "#FC5F03",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box className="d-flex justify-content-center align-items-center">
            <Divider sx={{ my: 2, width: "500px", border:"1px solid #a39e9e" }} />
          </Box>
          <Box display="flex" justifyContent="space-evenly">
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total Amount
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              $500
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
