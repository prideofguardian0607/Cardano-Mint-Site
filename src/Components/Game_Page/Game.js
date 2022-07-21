import { Grid } from "@mui/material";
import React from "react";
import "./game.css";

function Game() {
  return (
    <div className="game_main">
      <h1 className="game_title">games</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="game_upper_img"></div>
        </Grid>
      </Grid>
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
      <div className="game_seprator">
        <Grid container justifyContent="center">
          <Grid item xs={10} lg={6}>
            <img src="./Assets/game_vedio.png" className="game_image" alt="" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Game;
