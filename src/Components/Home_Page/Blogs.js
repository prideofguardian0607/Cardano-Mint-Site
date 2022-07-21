import { Grid } from "@mui/material";
import React from "react";

function Blogs() {
  const blogData = [
    {
      blogSrc: "./Assets/Blog_1.png",
      blogTitle: "New NFT Whitelist Giveaway",
      blogDes:
        "Salt Monsters CNFT w/ NFT Game Utility for holders! Rules:  Follow…",
    },
    {
      blogSrc: "./Assets/Blog_2.png",
      blogTitle: "2 CNFT Games in Development",
      blogDes:
        "It’s official. We have 2 nft games in development. They will be free to #saltmonsters…",
    },
    {
      blogSrc: "./Assets/Blog_3.png",
      blogTitle: "Sea of Red Crypto Market, ",
      blogDes:
        "hello #saltmonsters i’m swimming around a sea of red (crypto market).  i see lots of…",
    },
  ];
  return (
    <div className="cosmic_main">
      <h1 className="cosmic_heading">blogs</h1>
      <div className="content_container">
        <Grid container justifyContent="center">
          <Grid item xs={11} lg={10}>
            {/* NESTED GRID */}
            <Grid container justifyContent="center">
              {blogData.map((e) => {
                return (
                  <Grid item xs={11} sm={8} md={4} lg={3.7}>
                    <div className="blog_card">
                      <img src={e.blogSrc} alt="" className="blog_img" />
                      <div className="blog_card_content">
                        <h1 className="blog_title">{e.blogTitle}</h1>
                        <p className="blog_para">{e.blogDes}</p>
                      </div>
                      <div className="team_btn_div">
                        <button className="team_btn">Read More</button>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <div className="team_btn_container">
          <button className="order_btn">view all</button>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
