import { Grid } from "@mui/material";
import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact_main">
      <h1 className="contact_title">Contact us</h1>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="contact_img"></div>
        </Grid>
      </Grid>
      <div className="email_head">
        <h4 className="email_heading">salt monster</h4>
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={10}>
          {/* Nested Grid */}
          <Grid container justifyContent="center" alignItems="flex-end">
            <Grid item lg={6}>
              {/* Nested Grid */}
              <Grid container alignItems="center">
                <Grid item lg={1}>
                  <img
                    src="./Assets/maps-and-flags.png"
                    className="location_img"
                    alt=""
                  />
                </Grid>
                <Grid item lg={6}>
                  <p className="location_para">
                    805 Raleigh St Elizabeth City, NC 27909
                  </p>
                </Grid>
              </Grid>
              <div className="contact_middel_space"></div>
              <Grid container alignItems="center">
                <Grid item lg={1}>
                  <img
                    className="location_img"
                    src="./Assets/phone-call.png"
                    alt=""
                  />
                </Grid>
                <Grid item lg={6}>
                  <p className="location_para">252-489-8748</p>
                </Grid>
              </Grid>
              <div className="email_title">
                <h3 className="e_head">email us</h3>
              </div>
              {/* GRID FOR  EMAIL LABEL */}
              <Grid container justifyContent="flex-start">
                <Grid item xs={12} md={5} lg={5}>
                  <input
                    type="text"
                    placeholder="your name*"
                    className="email_label"
                  />
                </Grid>
                <Grid item lg={1}></Grid>
                <Grid item xs={12} md={5} lg={5}>
                  <input
                    type="text"
                    placeholder="your Email*"
                    className="email_label"
                  />
                </Grid>
                <Grid item xs={11} md={11} lg={11}>
                  <input
                    type="text"
                    placeholder="your Message*"
                    className="message_Label"
                  />
                </Grid>
              </Grid>

              <div className="send_btn">
                <button className="sent_it">send</button>
              </div>
            </Grid>
            {/* GRID FOR EMAIL SECTION */}
            <Grid item xs={10} md={5} lg={5}>
              <div className="last_spacing"></div>
              <img
                src="./Assets/contact_image.png"
                className="contact_img"
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="last_spacing"></div>
    </div>
  );
}

export default Contact;
