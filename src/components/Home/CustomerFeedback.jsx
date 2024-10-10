import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
import { Rating } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../styles/Home.scss";
import customer_img from "../../assets/feedbackimg.png";

const feedbackData = [
  {
    id: 1,
    name: "Floyd Miles",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar1.png", // Replace with actual image paths
    rating: 4.5,
  },
  {
    id: 2,
    name: "Ronald Richards",
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar2.png",
    rating: 4,
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar3.png",
    rating: 5,
  },
];

export const CustomerFeedback = () => {
  return (
    <div className="feedback-section py-5">
      <div className="container">
        <Typography variant="h4" className="text-center mb-2">
          Our Customer Feedback
        </Typography>
        <Typography variant="subtitle1" className="text-center mb-4">
          Don’t take our word for it. Trust our customers
        </Typography>

        {/* Feedback Cards */}
        <div className="row">
          {feedbackData.map((feedback) => (
            <div className="col-12 col-md-4 mb-4" key={feedback.id}>
              <Card sx={{ p: 2 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Avatar variant="square" src={customer_img} />
                    <Rating
                      value={feedback.rating}
                      precision={0.5}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                  </Box>
                  <Typography variant="h6" className="fw-bold mt-2">{feedback.name}</Typography>
                  <Typography variant="body2" className="mt-2" color="text.black">
                    {feedback.review}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Box className="d-flex justify-content-center align-items-center mt-4">
          <Button variant="outlined" className="mx-2">
            <ArrowBackIosIcon />
          </Button>
          <Box className="mx-2">
            <Button
              size="small"
              variant="contained"
              sx={{ backgroundColor: "#ff5722", minWidth: "10px" }}
            ></Button>
          </Box>
          <Button variant="outlined" className="mx-2">
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </div>
    </div>
  );
};
