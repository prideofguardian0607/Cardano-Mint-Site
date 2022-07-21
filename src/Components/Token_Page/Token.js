import { Grid } from "@mui/material";
import React from "react";
import "./token.css";

function Token() {
  const tokenData = [
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "10 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "20 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "30 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "40 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "50 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "60 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "70 tokens",
    },
    {
      tokenSrc: "./Assets/CompositeLayer.png",
      tokenQuantity: "80 tokens",
    },
  ];
  return (
    <div className="token_main">
      <h1 className="token_title">tokens</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="token_upper_img"></div>
        </Grid>
      </Grid>
      <div className="token_game_container">
        <h1 className="token_game_heading">buy a token</h1>
        <p className="token_game_para">Token can be used to play games</p>
      </div>
      {/* TOKEN CARD */}
      <Grid container justifyContent="center">
        <Grid item xs={11} md={10} lg={10}>
          {/* Nested Grid */}
          <Grid
            container
            justifyContent="space-between"
            sx={{ justifyContent: { xs: "center" } }}
          >
            {tokenData.map((e) => {
              return (
                <Grid item xs={11} sm={4} md={3} lg={2.8}>
                  <div className="token_card">
                    <div className="token_img_con">
                      <img src={e.tokenSrc} alt="" className="token_img" />
                    </div>
                    <div className="token_content_con">
                      <h2 className="token_des">{e.tokenQuantity}</h2>
                    </div>
                    <div className="token_btn_con">
                      <button className="token_btn">buy now</button>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <div className="token_last_con">
        <button className="token_btn">view more</button>
      </div>
    </div>
  );
}

export default Token;
