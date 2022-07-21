import { Grid } from "@mui/material";
import React from "react";
import Blogs from "./Blogs";
import CosmicBook from "./CosmicBook";
import "./home.css";
import NftCollection from "./NftCollection";
import Plans from "./Plans";
import Team from "./Team";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_main">
      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}>
          {/* NESTED GRID */}
          <Grid container justifyContent="space-between">
            <Grid item lg={5}>
              <h1 className="hero_intro">
                Extaraordanry <br /> Salt Monsters NFT Collections
              </h1>
              <div className="home_mint_btn">
                <Link to="/mint">
                  <button className="token_btn">mint now</button>
                </Link>
              </div>
            </Grid>
            <Grid item lg={4}>
              <p className="hero_intro_para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                vitae ligula nec mi tincidunt finibus.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* GRID FOR IMAGE */}
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="home_img"></div>
        </Grid>
      </Grid>
      {/* COSMIC BOOK SECTION */}
      <CosmicBook />
      {/* NFT COLLECTION SECTION */}
      <NftCollection />
      <Plans />
      {/* TEAM SECTION */}
      <Team />
      {/* BLOG SECTION */}
      <Blogs />
    </div>
  );
}

export default Home;
