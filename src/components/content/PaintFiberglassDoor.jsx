import React from "react";
import content from "../../json/doors.json";
import { Box, Container, Grid, Typography } from "@mui/material";
import figure1 from "../../assets/howtopaintfiberglassdoor.jpeg";
import howtopaintfiberglassdoor from "../../assets/howtopaintfiberglassdoor.png";

const PaintFiberglassDoor = () => {
  const { paint_fiberglass_door } = content;

  return (
    <Container sx={{ mt: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "1.8rem", md: "2.125rem" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {paint_fiberglass_door.title}
      </Typography>
      <Box
        component="img"
        src={howtopaintfiberglassdoor} 
        alt="Fiberglass Door"
      />

      <Grid container spacing={2} className="mt-4">
        {paint_fiberglass_door?.paintSecton?.map((step, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FC5F03", fontWeight: "bold" }}
                  >
                    {step.step}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {/* Add step-specific content here if needed */}
                    {step.step === "Materials:" ? (
                      <>
                        - Lint-free cloth
                        <br />
                        - Acetone
                        <br />
                        - Rubber Glove
                        <br />
                        - Masking tape
                        <br />
                        - 4" Bristle Brush
                        <br />
                        - For water-based application: Acrylic-based primer*/acrylic latex-based exterior grade paint.
                      </>
                    ) : (
                      "Detailed instructions for this step can be displayed here."
                    )}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={figure1} // Dynamically require images from assets
                    alt={`${step.step} illustration`}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    component="img"
                    src={figure1} // Dynamically require images from assets
                    alt={`${step.step} illustration`}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#FC5F03", fontWeight: "bold" }}
                  >
                    {step.step}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {/* Specific step instructions can be added here */}
                    {step.step === "Step 1: Surface Preparation" ? (
                      <>
                        1. Lay door horizontally on saw horses or a table.
                        <br />
                        2. Remove all the hardware and mask off anything you don't want painted, such as the glass insert.
                        <br />
                        3. Do not sand grained Fiberglass.
                        <br />
                        4. Wipe the door with acetone to clean any dust or residue from the surface.
                        <br />
                        5. Allow acetone to dry from the surface before applying paint. Do not use hydro-carbon based solvents to clean the surface as such products may leave a residue.
                        <br />
                        6. Apply primer with a 4" brush beginning with the panels. Follow the manufacturer's instructions for drying time before applying topcoat.
                        <br />
                        7. The primer must be completely dry before applying any finish topcoat.
                      </>
                    ) : (
                      "Further instructions for painting can be added here."
                    )}
                  </Typography>
                </Grid>
              </>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default PaintFiberglassDoor;
