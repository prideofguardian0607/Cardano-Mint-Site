import { Grid } from "@mui/material";
import React from "react";
import "./home.css";

function Plans() {
  return (
    <div className="cosmic_main">
      <Grid container justifyContent="center">
        <Grid item xs={11} md={8} lg={10}>
          <div className="plan_upper_container">
            <p className="plan_para">
              Salt Monsters is currently <br /> developing NFT games exclusively
              for Salt Monsters NFT holders.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={8} sm={5} lg={3}>
          <div className="plan_lower_container">
            <img src="./Assets/stay_tuned.png" alt="" className="plan_img" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Plans;
