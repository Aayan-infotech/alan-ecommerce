import React, { useState } from "react";
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
    avatar: "path/to/avatar1.png", 
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
  {
    id: 4,
    name: "Ronald Richards",
    review:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar2.png",
    rating: 4,
  },
  {
    id: 5,
    name: "Savannah Nguyen",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar3.png",
    rating: 5,
  },
];

export const CustomerFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Display 3 feedbacks at a time
  const feedbackPerPage = 3;
  const totalPages = Math.ceil(feedbackData.length / feedbackPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === totalPages ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const startIndex = currentIndex * feedbackPerPage;
  const visibleFeedbacks = feedbackData.slice(
    startIndex,
    startIndex + feedbackPerPage
  );

  return (
    <div className="feedback-section py-5">
      <div>
        <Typography variant="h4" className="text-center mb-2">
          Our Customer Feedback
        </Typography>
        <Typography variant="subtitle1" className="text-center mb-4">
          Don’t take our word for it. Trust our customers
        </Typography>

        {/* Feedback Cards */}
        <Grid container spacing={2}>
          {visibleFeedbacks.map((feedback) => (
            <Grid item xs={12} md={4} key={feedback.id}>
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
                  <Typography variant="h6" className="fw-bold mt-2">
                    {feedback.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="mt-2"
                    color="text.black"
                  >
                    {feedback.review}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Navigation Buttons */}
        <Box className="d-flex justify-content-center align-items-center mt-4">
          <Button onClick={handlePrevious} variant="contained" size="small">
            <ArrowBackIosIcon className="fs-6"/>
          </Button>

          {/* Dots */}
          <Box className="mx-2 d-flex">
            {Array(totalPages)
              .fill()
              .map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    mx: 0.5,
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentIndex ? "#FC5F03" : "#C4C4C4",
                  }}
                />
              ))}
          </Box>

          <Button onClick={handleNext} variant="contained" size="small">
            <ArrowForwardIosIcon className="fs-6"/>
          </Button>
        </Box>
      </div>
    </div>
  );
};
