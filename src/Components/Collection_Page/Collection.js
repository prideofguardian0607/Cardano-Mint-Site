import React from "react";
import { Grid } from "@mui/material";
import "./collection.css";
import { Link } from "react-router-dom";

function Collection() {
  const collectionData = [
    {
      collectionSrc: "./Assets/collection_5.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/mint_2.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/mint_3.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/mint_4.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/nft_6.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/nft_7.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/nft_5.png",
      collectionTitle: "lorem ipsum",
    },
    {
      collectionSrc: "./Assets/nft_4.png",
      collectionTitle: "lorem ipsum",
    },
  ];
  return (
    <div className="collection_full_main">
      <h1 className="game_title">Salt Monsters NFT</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="collection_upper_img"></div>
        </Grid>
      </Grid>
      {/* PHOTO CARD */}
      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}>
          {/* NESTED GRID */}
          <h1 className="col_main">NFT collection</h1>
          <Grid
            container
            justifyContent="space-between"
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
              },
            }}
          >
            {collectionData.map((e) => {
              return (
                <Grid item xs={10} md={2.9} lg={2.8}>
                  <div className="coll_card">
                    <div className="image_co">
                      <img className="col_img" src={e.collectionSrc} alt="" />
                    </div>
                    <div className="col_content">
                      <h2 className="col_head">{e.collectionTitle}</h2>
                      <div className="col_card_btn">
                        <Link to="/mint">
                          <button className="token_btn"> place a bid</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <div className="col_last_div">
        <button className="token_btn">view all</button>
      </div>
    </div>
  );
}

export default Collection;
