import { Grid } from "@mui/material";
import React from "react";
import "./home.css";

function CosmicBook() {
  const comicData = [
    {
      imgSrc: "./Assets/Clip.png",
      title: "the begining",
      price: "$10",
    },
    {
      imgSrc: "./Assets/salt-monsters-2.png",
      title: "finhead lives",
      price: "$10",
    },
  ];
  return (
    <div className="cosmic_main">
      <h1 className="cosmic_heading">comic books</h1>
      <div className="content_container">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={11} lg={9}>
            {/* NESTED GRID */}
            <Grid container justifyContent="center">
              {comicData.map((e) => {
                return (
                  <>
                    <Grid item xs={12} sm={5} md={5} lg={5}>
                      <div className="comic_card">
                        <div className="comic_img_div">
                          <img src={e.imgSrc} className="comic_img" alt="" />
                        </div>
                        <div className="comic_des">
                          <h3 className="card_title">{e.title}</h3>
                          <h4 className="card_price">{e.price}</h4>
                          <div className="order_div">
                            <button className="order_btn">order</button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default CosmicBook;
