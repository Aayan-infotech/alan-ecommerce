import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
  Container,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import Loader from "../../loader/Loader";

export const UserDetails = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  const loggedInUserId = Cookies.get("userLoggedInId");

  const fetchCurrentUserDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://44.196.64.110:7878/api/CustMng/customers/${loggedInUserId}`
      );
      console.log(response?.data?.data, "Fetched user data");
      if (response.status === 200 && response.data.success) {
        setCurrentUser(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedInUserId) {
      fetchCurrentUserDetails();
    }
  }, [loggedInUserId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Container className="mt-4 mb-4">
      <Card sx={{ maxWidth: 600, margin: "auto", p: 2 }}>
        <Box>
          <Typography variant="h5" component="div" fontWeight="bold">
            {currentUser.name || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentUser.email || "N/A"}
          </Typography>
        </Box>
        <Divider className="my-2"/>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Mobile Number
              </Typography>
              <Typography variant="body1">
                {currentUser.mobile || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body1">
                {currentUser.address || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                State
              </Typography>
              <Typography variant="body1">
                {currentUser.state || "N/A"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle2" color="text.secondary">
                Zip Code
              </Typography>
              <Typography variant="body1">
                {currentUser.zipCode || "N/A"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UserDetails;
