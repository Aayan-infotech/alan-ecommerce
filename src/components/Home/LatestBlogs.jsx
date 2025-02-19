import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Grid,
  CardMedia,
  Container,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import "../../styles/Home.scss";
import card_img1 from "../../assets/image 1.png";
import card_img2 from "../../assets/blog.png";
import card_img3 from "../../assets/blog1.png";

const feedbackData = [
  {
    id: 1,
    name: "Floyd Miles",
    subTitle: "19 OCT 2024 | BY JOHN DOE |",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar1.png",
    rating: 4.5,
    url: card_img1,
  },
  {
    id: 2,
    name: "Ronald Richards",
    subTitle: "19 OCT 2024 | BY JOHN DOE |",
    description:
      "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar2.png",
    rating: 4,
    url: card_img2,
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    subTitle: "19 OCT 2024 | BY JOHN DOE |",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    avatar: "path/to/avatar3.png",
    rating: 5,
    url: card_img3,
  },
];

export const LatestBlogs = () => {
  return (
    <div className="feedback-section">
      <Container maxWidth="false">
        <Typography variant="h4" className="text-center mb-2">
          Latest Blogs
        </Typography>
        <div className="row">
          {feedbackData?.map((feedback, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <Card sx={{ p: 2 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={feedback?.url}
                  title="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {feedback?.subTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="mt-2"
                    sx={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "20px",
                      lineHeight: "1.20",
                    }}
                  >
                    {feedback?.name}
                  </Typography>
                  <Divider />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="mt-2"
                  >
                    {feedback?.description}
                  </Typography>
                </CardContent>
                <Button
                  size="small"
                  className="w-100"
                  variant="outlined"
                  sx={{ borderColor: "#ff5722", color: "#ff5722" }}
                >
                  Read More
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
