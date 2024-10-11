import React from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import banner from "../../assets/doors.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation } from "react-router-dom";

export const Faq = () => {
  const location = useLocation();

  // Dynamic data for FAQ sections
  const faqSections = [
    {
      sectionTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "What are the advantages of Vinyl?",
          answer:
            "Vinyl windows are durable and low-maintenance. They never require painting and are not affected by moisture. They are energy efficient and are often used to replace aluminum windows. There are many great features of the new generation of Vinyl.",
        },
        {
          question: "Warranty included with products?",
          answer:
            "Yes, all our products come with a manufacturer’s warranty that covers various defects and issues.",
        },
        {
          question: "How do I get free shipping?",
          answer:
            "Free shipping is available on select products when your order exceeds a certain value. Check our shipping policy for more details.",
        },
        {
          question: "Fiberglass door versus a Wood door?",
          answer:
            "Fiberglass doors are more durable and energy-efficient than wood doors. They also require less maintenance and are resistant to warping and rotting.",
        },
      ],
    },
    {
      sectionTitle: "Glossary",
      faqs: [
        {
          question: "Question",
          answer:
            "Vinyl windows are durable and low-maintenance. They never require painting and are not affected by moisture. They are energy efficient and are often used to replace aluminum windows. There are many great features of the new generation of Vinyl.",
        },
        {
          question: "Question",
          answer:
            "Yes, all our products come with a manufacturer’s warranty that covers various defects and issues.",
        },
        {
          question: "Question",
          answer:
            "Free shipping is available on select products when your order exceeds a certain value. Check our shipping policy for more details.",
        },
        {
          question: "Question",
          answer:
            "Fiberglass doors are more durable and energy-efficient than wood doors. They also require less maintenance and are resistant to warping and rotting.",
        },
      ],
    },
  ];

  // Format the URL path for display
  const formatPath = (path) => {
    return path
      .split("/")
      .filter(Boolean)
      .map((segment) => {
        if (segment.toLowerCase() === "faq") {
          return "Frequently Asked Question";
        }
        return segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
      })
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
            FAQ
          </Typography>
          <Typography variant="h6" className="text-black fw-bold">
            <span>
              Home {">"} {formatPath(location.pathname)}
            </span>
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <Box>
          {faqSections.map((section, sectionIndex) => (
            <Box key={sectionIndex} className="mt-4">
              {/* Section Title */}
              <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                {sectionIndex + 1}. {section.sectionTitle}
              </Typography>

              {/* FAQs for the section */}
              {section.faqs?.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    marginBottom: "15px",
                    borderRadius: "8px",
                    padding: "10px",
                    boxShadow: "0px 10px 30px rgb(229 155 106 / 50%)",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ff6600" }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography className="fw-bold">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};
