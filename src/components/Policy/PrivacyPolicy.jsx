import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Divider } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export const PrivacyPolicy = () => {

  return (
    <Container className="mt-5 mb-5">
      <div class="row">
        <div class="col">
          <Box mb={4}>
            <Typography variant="h3" className="fw-bold" gutterBottom>
              Privacy Policy
            </Typography>
            <Divider />
          </Box>

          <Box mb={3}>
            <Typography paragraph>
              Thank you for visiting DiscountDW.com. We have done everything
              possible to ensure the privacy and security of your transactions
              with us. Discount Door and Window wants you to understand the
              steps that we take to protect this privacy. All visits to
              DiscountDW.com are subject to our website’s Terms of Use and
              Privacy Policy as described herein. The following site Privacy
              Policy was last updated on January 2025.
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="h5" className="fw-bold">
              Personal Collection of Personally Identifiable Information by&nbsp;
              <a href="DiscountDW.com">DiscountDW.com</a>
            </Typography>
            <Typography paragraph>
              We do not collect personally identifiable information about you,
              except when you provide it to us through order forms, registration
              fields and other similar site interactions. For example, if you
              decide to place an order, we will need to know your shipping and
              billing address, credit card number, expiration date, and security
              code. To protect your personal information, registered Site users
              must enter a user name/email address and password to access their
              personally identifiable information. When you submit your
              personally identifiable information on the Site, you are giving
              your consent to the collection, use and disclosure of your
              personal information as set forth in this Privacy Policy.
            </Typography>
            <Typography paragraph>
              We use email to communicate with you about your orders. Only with
              your permission will we email you for any other reason - - e.g. to
              let you know about special promotions. We know this is a privilege
              and not a right...we don't like getting unwanted junk email
              either. You have the option to decline or approve email
              communications from us at any time. Just select the appropriate
              response in your account information.
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h5" className="fw-bold mb-3">
              Use of Personally Identifiable Information by <a href="https://discountdw.com/">DiscountDW.com</a>
            </Typography>
            <Box>
              <Typography variant="h5" className="fw-bold">
                Communications
              </Typography>
              <Typography paragraph>
                If you select during the order process or at other times when
                you submit personally identifiable information, the information
                you provide may be used by <a href="https://discountdw.com/">DiscountDW.com</a> to create and deliver
                to you our newsletters, surveys or other communications
                containing product information. If you prefer not to receive
                such Communications, please do not select the ‘Please inform me
                option’. If you do select this option and later decide that you
                would no longer like to receive these communications, please use
                the features made available to you.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" className="fw-bold">
                Brochure Mailing List
              </Typography>
              <Typography paragraph>
                If you have requested a Discount Door and Window brochure, all
                information is kept completely confidential and is not shared
                with any third parties. We may, on occasion, send you an updated
                catalog or brochure. If you do not wish to receive any mail from
                Discount Door and Window, please contact us via email at&nbsp;
                <a href="alan@sandiegodoorandwindow.com">
                  alan@sandiegodoorandwindow.com
                </a>
                . Include your name and mailing address and email address. You
                will be removed from any future mailings.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" className="fw-bold">
                Communications to Serve You
              </Typography>
              <Typography paragraph>
                If you have elected to provide us with your contact information,
                e.g., by registering at the Site, emailing our Customer Service
                department or placing an order, we may provide you with service
                related announcements concerning the Site or contact you
                regarding your customer service requests or your order. For
                example, all registered users will receive an email to confirm
                their order. These types of communications are necessary to
                serve you, respond to your concerns and to provide the high
                level of customer service that{" "}
                <a href="DiscountDW.com">DiscountDW.com</a> offers its
                customers.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Disclosure of Personally Identifiable Information
              </Typography>
              <Typography paragraph>
                We will never provide your personally identifiable information
                to third parties for their use in marketing their products or
                services to you without your consent. Discount Door and Window
                takes great pride in having you as a customer and we will ensure
                your privacy as a customer. Discount Door and Window does not
                sell or exchange names or any other information about our
                customers with third parties.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Fraud Protection and Compliance with Law
              </Typography>
              <Typography paragraph>
                We may disclose any information, including personally
                identifiable information, we deem necessary, in our sole
                discretion, to comply with any applicable law, regulation, legal
                process or governmental request. We may also exchange
                information, including personally identifiable information, with
                other companies and organizations for credit fraud protection
                and risk reduction.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Service Providers
              </Typography>
              <Typography paragraph>
                We may retain other companies and individuals to perform
                functions consistent with our Privacy Policy on our behalf.
                Examples include customer support specialists, web hosting
                companies, fulfillment companies (e.g., companies that fill
                product orders or coordinate mailings), data analysis firms and
                email service providers. Such third parties may be provided with
                access to personally identifiable information needed to perform
                their functions, but may not use such information for any other
                purpose.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Special Events
              </Typography>
              <Typography paragraph>
                If you elect to participate in any promotions, sweepstakes,
                surveys, questionnaires or other events during your visit to our
                Site, the rules or terms and conditions for those events may
                indicate that your personally identifiable information will be
                shared with third parties. By choosing to participate and
                submitting your personally identifiable information with respect
                to such events, you consent to disclosure of your personally
                identifiable information to such third parties.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Business Transfers
              </Typography>
              <Typography paragraph>
                As we continue to develop our business, we might sell certain of
                our assets. In such transactions, user information, including
                personally identifiable information, generally is one of the
                transferred business assets, and by submitting your personal
                information on the Site you agree that your data may be
                transferred to such parties in these circumstances.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Cookies, IP Addresses, Pixel Tags and Tracking Technology
              </Typography>
              <Typography paragraph>
                We may place a "cookie" on your computer's hard drive so we can
                recognize you as a return user and personalize your experience.
                A cookie is a piece of data that enables us to track and target
                your preferences. The cookie will be stored on your computer's
                hard drive until you remove it. We may also use temporary or
                "session" cookies to help you shop. These cookies will expire
                when you place an order. You can have your browser notify you
                of, or automatically reject, cookies. If you reject our cookies,
                you may still use the Site, but you may be limited in the use of
                some of the features. In addition, we may use IP addresses to
                analyze trends, administer the Site, track traffic patterns, and
                gather demographic information for aggregate use, as well as in
                combination with your personally identifiable information for
                credit fraud protection and risk reduction.
              </Typography>
              <Typography paragraph>
                Similarly, when you visit this Site or view one of our emails,
                we may use pixel tags (also called "clear" gifs), tracking links
                and/or similar technology to note some of the pages you visit on
                our Site and personalize your experience. We may also use pixel
                tags to determine what types of email your browser supports. We
                may use the information collected through pixel tags, tracking
                links and similar technology in combination with your personally
                identifiable information.
              </Typography>
              <Typography paragraph>
                DiscountDW.com does recognize your ISP (internet service
                provider), however, we cannot identify you as an individual. If
                you make an on-line purchase we do collect information (such as
                sales statistics and traffic patterns) to help improve your
                shopping experience. We keep all information confidential.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Use of Aggregate Information
              </Typography>
              <Typography paragraph>
                We may use the information you provide in aggregate
                (non-personally identifiable) form for internal business
                purposes, such as generating statistics and developing marketing
                plans. We may collect, store or accumulate certain
                non-personally identifiable information concerning your use of
                the Site, such as information regarding which of our pages are
                most popular. We may share or transfer non-personally
                identifiable information with or to our affiliates, licensees
                and partners.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Links
              </Typography>
              <Typography paragraph>
                This Privacy Policy applies only to the information collected on
                this Site. Our Site may contain links to or from other websites
                and you should be aware that we are not responsible for the
                privacy practices of other websites. We encourage you to read
                the privacy policies of other websites linked to the Site.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Security
              </Typography>
              <Typography paragraph>
                Discount Door and Window seeks to protect the security of your
                personal information both online and offline. All credit card
                transactions are secure. Every on-line order is encrypted and
                sent through a secure server, using SSL technology to prevent
                information from being intercepted.
              </Typography>
              <Typography paragraph>
                Confidential information such as your credit card number will be
                used only to fulfill your order. To protect your privacy, we
                will ask you to enter your credit card number and expiration
                date each time you place an order with us. This way, even if
                someone else accesses the account information stored on your
                computer, they won't be able to use your credit card.
              </Typography>
              <Typography paragraph>
                E-mail is not encrypted and is not a secure means to transmit
                credit card numbers. We will only display the last 4 digits of
                your credit card number on your account.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
                Notification of Policy Changes
              </Typography>
              <Typography paragraph>
                Discount Door and Window reserves the right to revise this
                Privacy Policy in the future by posting changes at this location
                and we may make changes at any time without notification.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
              Updating Personal Information
              </Typography>
              <Typography paragraph>
              If you are a registered member at DiscountDW.com, you can change your personal information at any time by updating your information at check-out.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h5" className="fw-bold">
              Contacting Us
              </Typography>
              <Typography paragraph>
              We welcome your comments and questions about privacy. Please send email to <a href="contact@discountdw.com">contact@discountdw.com</a>
              </Typography>
            </Box>

            <Box>
              <Typography paragraph>
              We are confident that your visit to DiscountDW.com is secure and safe. However, you may choose to call us directly to place your order over the telephone. Please call Customer Service at <strong>(858) 564-2564</strong>.
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </Container>
  );
};
