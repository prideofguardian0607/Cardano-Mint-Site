import { Grid } from "@mui/material";
import React from "react";
import "./blog.css";

function BlogFull() {
  const fullBlogData = [
    {
      imgSrc: "./Assets/Blog_3.png",
      blogtitle: "New NFT Whitelist Giveaway",
      blogPara:
        "New NFT WL Giveaway. Salt Monsters CNFT w/ NFT Game Utility for holders! Rules:  Follow…",
    },
    {
      imgSrc: "./Assets/Blog_1.png",
      blogtitle: "2 CNFT Games in Development",
      blogPara:
        "It’s official. We have 2 nft games in development. They will be free to #saltmonsters…",
    },
    {
      imgSrc: "./Assets/blog_10.png",
      blogtitle: "Salt Monsters NFT Game in Development",
      blogPara:
        "Salt Monsters NFT Game is in development. It will be called To the moon ",
      blogLink: " https://twitter.com/i/status/1534241870418694144",
    },

    {
      imgSrc: "./Assets/blog_4.png",
      blogtitle: "Sea of Red Crypto Market, ADA, Bitcoin, Eth",
      blogPara:
        "hello #saltmonsters i’m swimming around a sea of red (crypto market).  i see lots of…",
    },
    {
      imgSrc: "./Assets/blog_5.png",
      blogtitle: "10 OG-Whitelist + Bonus Prize Giveaway",
      blogPara:
        "We have a big Giveaway today on Twitter.  10 OG-Whitelist Giveaway + Bonus Prize! You…",
    },
    {
      imgSrc: "./Assets/blog_6.png",
      blogtitle: "Salt Monsters & BrickzNation WL Giveaway",
      blogPara:
        "Salt Monsters & BrickzNation Double #Giveaway WL spots from Salt Monsters WL spots… ",
    },
    {
      imgSrc: "./Assets/blog_7.png",
      blogtitle: "10 WL Spot Giveaway",
      blogPara:
        "GM #saltmonsters  WL Spots Giveaway   To enter:   Follow @saltmonsters   RT & Tag…",
    },
    {
      imgSrc: "./Assets/blog_8.png",
      blogtitle: "Discord & Metadata today",
      blogPara:
        "Hello #saltmonsters we’re busy working on Discord and Metadata tonight. Here’s a look at Salt Monsters #10001 (only 10k",
    },
    {
      imgSrc: "./Assets/blog_9.png",
      blogtitle: "Discord Test, OG Whitelist",
      blogPara:
        "We’re looking for a few #saltmonsters to test our new Discord server. Join our Discord… ",
    },
  ];
  return (
    <div className="blog_full_main">
      <h1 className="game_title">Salt Monters Blog</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={12}>
          <div className="blog_upper_img"></div>
        </Grid>
      </Grid>
      <div className="blog_card_content">
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} lg={10}>
            {/* Nested Grid */}
            <Grid container justifyContent="center">
              {fullBlogData.map((e) => {
                return (
                  <Grid item xs={10} md={5} lg={4}>
                    <div className="content_card">
                      <div className="content_img_cont">
                        <img src={e.imgSrc} alt="" className="content_img" />
                      </div>
                      <div className="content_m">
                        <h1 className="m_h1">{e.blogtitle}</h1>
                        <p className="m_p">
                          {e.blogPara}
                          <a
                            className="link_a"
                            href={e.blogLink}
                            target="_blank"
                          >
                            {e.blogLink}
                          </a>
                        </p>
                      </div>
                      <div className="blog_b">
                        <button className="token_btn">read more</button>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="blog_c">
        <button className="token_btn">view all</button>
      </div>
    </div>
  );
}

export default BlogFull;
