import React from "react";
import { Grid } from "@mui/material";
import "./about.css";
import AboutContent from "./AboutContent";

function About() {
  return (
    <div className="about_main">
      <h1 className="about_title">Salt Monsters About Us</h1>

      <Grid container justifyContent="cente">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="about_img"></div>
        </Grid>
      </Grid>
      {/* Content Section */}
      <AboutContent />
    </div>
  );
}

export default About;
