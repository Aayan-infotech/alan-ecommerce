import React from "react";
import content from "../../json/doors.json";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    InputLabel,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import labour_warrinty from "../../assets/labour_warrinty.png";

const LabourEstimate = () => {
    const { labour_estimate } = content;

    return (
        <div>
            <Container sx={{ mt: { xs: 2, md: 4 } }}>
                {/* Title */}
                <Typography
                    variant="h4"
                    gutterBottom
                    className="fw-bold"
                    sx={{
                        fontSize: { xs: "1.8rem", md: "2.125rem" },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    {labour_estimate.title}
                </Typography>
                <Grid container spacing={2}>
                    {/* Image */}
                    <Grid item xs={12} md={6}>
                        <Box
                            display="flex"
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <img
                                src={labour_warrinty}
                                alt="Guide 1"
                                className="w-100"
                            />
                        </Box>
                    </Grid>

                    {/* <Box> */}
                    {/* <Grid container spacing={2} alignItems="center">
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Pricing: $0.00
                            </Typography>
                        </Box>
                        <Grid item xs={12} sm={4}>
                            <InputLabel sx={{ fontWeight: 'bold' }}>Preferred Date for Appointment</InputLabel>
                            <TextField fullWidth placeholder="Select Date" variant="filled" />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <InputLabel sx={{ fontWeight: 'bold' }}>Preferred Date Time for Appointment</InputLabel>
                            <TextField fullWidth placeholder="Select Time" variant="filled" />
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <InputLabel sx={{ fontWeight: 'bold' }}>Qty:</InputLabel>
                            <Select fullWidth variant="filled" defaultValue="">
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Button fullWidth variant="contained" color="primary" sx={{ height: '100%' }}>
                                Add to Cart
                            </Button>
                        </Grid>
                        <Grid item xs={12} container spacing={2} justifyContent="space-between" sx={{ mt: 2 }}>
                            <Grid item xs={4} sm="auto">
                                <Button variant="contained" color="secondary" fullWidth sx={{ bgcolor: '#333' }}>
                                    + Add to Wishlist
                                </Button>
                            </Grid>
                            <Grid item xs={4} sm="auto">
                                <Button variant="contained" color="secondary" fullWidth sx={{ bgcolor: '#333' }}>
                                    ? Item Inquiry
                                </Button>
                            </Grid>
                            <Grid item xs={4} sm="auto">
                                <Button variant="contained" color="secondary" fullWidth sx={{ bgcolor: '#333' }}>
                                    ▼ Tell a Friend
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid> */}
                    {/* </Box> */}

                    {/* Description */}
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            SKU: {labour_estimate.SKU}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {labour_estimate.description}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {labour_estimate.note}
                        </Typography>
                    </Grid>

                    {/* What to Expect Section */}
                    <Grid item xs={12}>
                        <Typography variant="h5" className="fw-bold">
                            Description
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#FC5F03", p: 2, color: "white" }}>
                            <Typography variant="h6" gutterBottom>
                                {labour_estimate.what_to_expect.title}
                            </Typography>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant="body1" paragraph sx={{ mb: 0 }}>
                                    {labour_estimate.what_to_expect.description}
                                </Typography>
                                <List
                                    sx={{
                                        listStyleType: "disc",
                                        pl: 2,
                                        "& .MuiListItem-root": {
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        },
                                    }}
                                >
                                    {labour_estimate.what_to_expect.pricing_estimates.map((estimate, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                display: "list-item",
                                                listStyleType: "disc",
                                            }}
                                        >
                                            <ListItemText primary={estimate} />
                                        </ListItem>
                                    ))}
                                </List>

                                <Typography variant="subtitle1" gutterBottom>
                                    Included Services:
                                </Typography>
                                <List
                                    sx={{
                                        listStyleType: "disc",
                                        pl: 2,
                                        "& .MuiListItem-root": {
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        },
                                    }}
                                >
                                    {labour_estimate.what_to_expect.included_services.map((service, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                display: "list-item",
                                                listStyleType: "disc",
                                            }}
                                        >
                                            <ListItemText primary={service} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    {/* Labor Warranty Information */}
                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: "#FC5F03", p: 2, color: "white" }}>
                            <Typography variant="h6" gutterBottom>
                                {labour_estimate.labor_warranty_information.title}
                            </Typography>
                            <Box sx={{ ml: 3 }}>
                                <Typography variant="body1" paragraph>
                                    {labour_estimate.labor_warranty_information.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12}>
                        <Box sx={{ bgcolor: '#FC5F03', py: 4, p: 3 }}>
                            <Box>
                                <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                                    Contact Form
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', mb: 2 }}>
                                    Use this form to contact us with questions, comments, or feedback:
                                </Typography>
                            </Box>
                            <Box className="px-5">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                            Your name
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Abc"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: 'white',
                                                borderRadius: 1,
                                                '& .MuiOutlinedInput-root': { borderRadius: 1 },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                            Email address
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Abc@def.com"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: 'white',
                                                borderRadius: 1,
                                                '& .MuiOutlinedInput-root': { borderRadius: 1 },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                            Mobile No.
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="+123456789"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: 'white',
                                                borderRadius: 1,
                                                '& .MuiOutlinedInput-root': { borderRadius: 1 },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="subtitle2" sx={{ color: 'white' }}>
                                            Message
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            placeholder="Hi! I’d like to ask about"
                                            variant="outlined"
                                            sx={{
                                                bgcolor: 'white',
                                                borderRadius: 1,
                                                '& .MuiOutlinedInput-root': { borderRadius: 1 },
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                bgcolor: '#1E73BE',
                                                color: 'white',
                                                borderRadius: 1,
                                                mt: 2,
                                                '&:hover': { bgcolor: '#155a8a' },
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LabourEstimate;
