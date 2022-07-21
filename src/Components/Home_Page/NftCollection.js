import { Grid } from "@mui/material";
import React from "react";
import "./home.css";

function NftCollection() {
  const collectionData = [
    {
      nftSrc: "./Assets/collection_1.png",
    },
    {
      nftSrc: "./Assets/collection_2.png",
    },
    {
      nftSrc: "./Assets/collection_3.png",
    },
    {
      nftSrc: "./Assets/collection_5.png",
    },
  ];
  return (
    <div className="cosmic_main">
      <h1 className="cosmic_heading">NFT collections</h1>
      <div className="content_container">
        <Grid container justifyContent="center">
          <Grid item xs={11} lg={10}>
            {/* Nested Grid */}
            <Grid container justifyContent="center">
              {collectionData.map((e) => {
                return (
                  <Grid item xs={11} sm={5} lg={2.8}>
                    <div className="collection_container">
                      <img src={e.nftSrc} alt="" className="collection_img" />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="collection_btn_container">
        <button className="order_btn">view all</button>
      </div>
    </div>
  );
}

export default NftCollection;
