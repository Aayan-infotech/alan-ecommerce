import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const TermsConditions = () => {
    return (
        <Container className="mt-5 mb-5">
            <div class="row">
                <div class="col">
                    <Box mb={4}>
                        <Typography variant="h3" className="fw-bold" gutterBottom>
                            Customer Returns
                        </Typography>
                        <Divider />
                    </Box>

                    <Box mb={3}>
                        <Typography paragraph>
                            All sales are final. Due to window and door customization, returns
                            will not be accepted. If you want to discuss your particular
                            situation, you can{" "}
                            <a href="http://44.196.64.110:2040/contact" className="fw-bold">
                                contact us
                            </a>{" "}
                            to discuss this further.
                        </Typography>
                    </Box>

                    <Box mb={3}>
                        <Typography variant="h5" className="fw-bold">
                            Shipping Damage
                        </Typography>
                        <Typography paragraph>
                            In the event that your product arrives damaged from the freight
                            company, you immediately write down any and all <strong>"EXCEPTIONS"</strong> on
                            the Delivery Receipt. Please do this prior to the carrier leaving.
                            Our freight is insured and you have every right to file a freight
                            claim with the carrier if they did not handle your products
                            properly. If you see visible damage to the cartons or the product,
                            you can choose to (1) keep the product and file a claim (ask for a
                            claim form from the driver), or (2) refuse the product and have it
                            sent back to us. It is best to document any problems with a
                            digital camera if possible.
                        </Typography>
                        <Typography paragraph>
                            VERY IMPORTANT!! Please try to inspect each product thoroughly for
                            damage prior to signing the delivery receipt. Once you are
                            completely satisfied there is no damage, then sign the delivery
                            receipt which releases the delivery company and Discount Door and
                            Window from all damage claims.
                        </Typography>
                        <Typography paragraph>
                            If the delivery driver does not allow you to inspect each piece,
                            please note on the delivery receipt the following statement.
                            <strong>POSSIBLE CONCEALED DAMAGE. THE DELIVERY DRIVER WILL NOT ALLOW ME
                            TO EXAMINE EACH BOX FOR INSPECTION</strong> and then sign where required.
                            If these terms are not followed we cannot be liable for any
                            replacements or refunds.
                        </Typography>
                        <Typography paragraph>
                            Our excellent packaging and shipping experience reduces the
                            chances of damage. However, in the event of damage please save all
                            original packaging and notify us and the shipping company
                            immediately. Damages to items shipped must be noted on the
                            delivery receipt and reported to us immediately. Concealed damage
                            must be reported to us and the shipper within 5 days of arrival.
                        </Typography>
                        <Typography paragraph>
                            Pictures are required in the event of hidden damage. If there are
                            partial damages or shortages, accept the good items and list
                            damages/shortages on the delivery receipt. If the product is
                            refused and damage is noted on the delivery receipt; we will send
                            a replacement to correct the problem, or issue a pickup to replace
                            the product at our discretion.
                        </Typography>
                        <Typography paragraph>
                            It is at the discretion of Discount Door and Window to decide if a
                            damaged product will be repaired or replaced.{" "}
                            <a
                                href="http://ddw.webshopmanager.com/contact.html"
                                className="fw-bold"
                            >
                                Contact Discount Door and Window
                            </a>{" "}
                            to discuss your unique situation.
                        </Typography>
                    </Box>

                    <Box mb={3}>
                        <Typography variant="h5" className="fw-bold">
                            Disclaimer of Liability
                        </Typography>
                        <Typography paragraph>
                            To the extent permitted by law, neither Discount Door and Window
                            nor any of its employees, related partners or their respective
                            officers will be liable in any way for any loss, damage, cost or
                            expense suffered or incurred by you or claims made by you because
                            of your use of this site, unavailability of this site or in
                            connection with any products, services or information advertised,
                            offered or supplied through this site. Discount Door and Window
                            maintains the exclusive right to cancel or refuse any order
                            without limitation. Including price omission, incorrect price,
                            typographical errors, suspicion of fraud, and delivery area
                            restrictions.
                        </Typography>
                    </Box>
                </div>
            </div>
        </Container>
    );
};
