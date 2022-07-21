import React from "react";
import { Grid } from "@mui/material";
import "./roadmap.css";

function Roadmap() {
  const roadmapData = [
    {
      paraOne: "",
    },
  ];
  return (
    <div className="roadmap_full_main">
      <h1 className="game_title">Salt Monsters roadmap</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="collection_upper_img"></div>
        </Grid>
      </Grid>
      {/* ROADMAP  CARD */}
      <h2 className="roadmap_main_head">
        “Roads? Where we’re going, we don’t need roads!!” – Doc Brown
      </h2>

      <Grid container justifyContent="center">
        <Grid item xs={11} md={11} lg={11}>
          {/* NESTED GRID */}
          {/* FIRST CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Grid item md={3} lg={3}>
                  <img src="./Assets/2020.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-end",
              },
            }}
          >
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card">
                <div className="roadmap_content">
                  <h2 className="heading_r">2020</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Wrote the original Salt Monsters story{" "}
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Created Salt Monsters brand</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Created comic book Salt Monsters Issue #1 (The Beginning)
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Character development</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/roadmap_1.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>
          {/* SECOND CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <Grid item md={3} lg={3}>
                  <img src="./Assets/2021.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-start",
              },
            }}
          >
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/roadmap_3.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card_2">
                <div className="roadmap_content">
                  <h2 className="heading_r">2021</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Storyboards</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Ink & Coloring</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Added captions</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Final proof</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Added captions</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Final proof</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Added captions</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Final proof</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Self-publish comic book Issue #1
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Setup website saltmonsterscomic.com
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Sell comic books online and in local stores in the Outer
                      Banks, NC area{" "}
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Started comic book Issue #2 (Finhead Lives){" "}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>

          {/* THIRD CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Grid item md={3} lg={3}>
                  <img src="./Assets/2022.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-end",
              },
            }}
          >
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card">
                <div className="roadmap_content">
                  <h2 className="heading_r">2022</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Storyboards Issue #2</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Ink & Coloring Issue #2</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/roadmap_4.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>

          {/* Fourth CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <Grid item md={3} lg={5}>
                  <img src="./Assets/APRIL 2022.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-start",
              },
            }}
          >
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/roadmap_5.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card_2">
                <div className="roadmap_content">
                  <h2 className="heading_r">APRIL 2022</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      4/28/22 – Began working on NFT Collection Phase 1
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      4/28/22 – Setup Twitter @saltmonsters
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>

          {/* FIFTH CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Grid item md={3} lg={5}>
                  <img src="./Assets/MAY 2022.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-end",
              },
            }}
          >
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card">
                <div className="roadmap_content">
                  <h2 className="heading_r">MAY 2022</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Research NFT, CNFT, Whitelist, Drops, etc
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Purchased saltmonsters.io</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Added NFT section to website</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Twitter Marketing Whitelist Campaign
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Design 5k collection</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Discord Server</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Network with CNFT community</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/roadmap_4.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>
          {/* SIXTH CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-end",
                  },
                }}
              >
                <Grid item md={3} lg={5}>
                  <img src="./Assets/JUNE 2022.png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-start",
              },
            }}
          >
            <Grid item xs={11} md={5} lg={3}>
              <img src="./Assets/blog_5.png" alt="" className="roadmap_img" />
            </Grid>
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card_2">
                <div className="roadmap_content">
                  <h2 className="heading_r">JUNE 2022</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      NFT Utility Game Development ( :rocket: In Progress)
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Website Marketplace Development (In Progress)
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">ADA Wallet Integration</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">NFT Order Testing</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Captions – Comic Issue #2</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Finalize Comic Issue #2</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Self-publish Comic Issue #2</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Manage Twitter & Discord</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Continue to build relationships and network with CNFT
                      communitynity
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>

          {/* LAST CARD */}
          {/*  */}
          <Grid container justifyContent="center">
            <Grid item xs={11} md={12} lg={8}>
              {/* Nested for date */}
              <Grid
                container
                sx={{
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                    lg: "flex-start",
                  },
                }}
              >
                <Grid item md={3} lg={5}>
                  <img src="./Assets/Clip (3).png" alt="" className="date" />
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "flex-end",
              },
            }}
          >
            <Grid item xs={11} md={7} lg={7}>
              <div className="roadmap_card">
                <div className="roadmap_content">
                  <h2 className="heading_r">JULY 2022</h2>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Establish Presale date</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Establish Public Sale date</p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">
                      Add dates to NFT Drops Calendars
                    </p>
                  </div>
                  <div className="span_div">
                    <span>
                      <img
                        src="./Assets/checked.png"
                        className="cheaked_icon"
                        alt=""
                      />
                    </span>
                    <p className="road_para">Prepare for launch</p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={11} md={5} lg={3}>
              <img
                src="./Assets/frame_07_delay-.png"
                alt=""
                className="roadmap_img"
              />
            </Grid>
          </Grid>
          <div className="roadmap_seprate"></div>
          <div className="roadmap_seprate"></div>
          <div className="roadmap_seprate"></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Roadmap;
