import { Grid } from "@mui/material";
import React from "react";
import "./comic.css";

function Comic() {
  const comicData = [
    {
      comicImg: "./Assets/Clip.png",
      topSrc: "./Assets/issue1.png",
      topTitle: "Comic Book Issue #1 - The Beginning",
      comicPara:
        "A woman goes missing during a fishing trip off the coast of Cape Hatteras in 2019. Authorities are suspicious of her husband. They bring him in for questioning, and he escapes. The hunt is on!",
      comicAppearaness: "First Appearances :",
      appearDes: "GUNZ, JET, FINHEAD",
      writer: "https://linktr.ee/dannytaylor",
      writerName: "Danny Taylor",

      artist: "Mike Ruolngul",
      comicPrice: "$10",
    },
    {
      comicImg: "./Assets/salt-monsters-2.png",
      topSrc: "./Assets/issue2.png",
      topTitle: "ssue #2 - Finhead Lives!",
      comicPara:
        "GUNZ and JET are on the run. Is FINHEAD alive? The saga continues.",
      comicAppearaness: "First Appearances :",
      appearDes: "KLAWS",
      writer: "https://linktr.ee/dannytaylor",
      writerName: "Danny Taylor",
      artist: "Mike Ruolngul",
      comicPrice: "$10",
      direction: "row-reverse",
      cIndicator: "./Assets/indicator.png",
      listOne: " Short Story - Done",
      listTwo: " Storyboards - Done",
      listThree: " Fair Sketch / Ink - Done",
      listFour: " Coloring - Done",
      listFive: " Publishing - Coming 2022",
    },
  ];
  return (
    <div className="mint_full_main">
      <h1 className="game_title">comic books</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="mint_upper_img"></div>
        </Grid>
      </Grid>
      {/* GRID FOR COMIC CARD */}
      <Grid container justifyContent="center">
        <Grid item lg={8}>
          {comicData.map((e) => {
            return (
              <Grid
                container
                justifyContent="space-evenly"
                direction={e.direction}
                className="comic_card_u"
              >
                <Grid item lg={5}>
                  <img src={e.comicImg} alt="" className="mint_img" />
                </Grid>
                <Grid item lg={5}>
                  <div className="comic_u">
                    <img src={e.topSrc} className="mint_img" alt="" />
                  </div>
                  <div className="comic_p1">
                    <h4 className="h_1">{e.topTitle}</h4>
                    <p className="p_1">
                      {e.comicPara}
                      <ul className="ul_c">
                        <li className="list_c">
                          <span className="comic_indicator">
                            <img src={e.cIndicator} alt="" />
                            <span className="span_4">{e.listOne}</span>
                          </span>
                        </li>
                        <li className="list_c">
                          <span className="comic_indicator">
                            <img src={e.cIndicator} alt="" />
                            <span className="span_4">{e.listTwo}</span>
                          </span>
                        </li>
                        <li className="list_c">
                          <span className="comic_indicator">
                            <img src={e.cIndicator} alt="" />
                            <span className="span_4">{e.listThree}</span>
                          </span>
                        </li>
                        <li className="list_c">
                          <span className="comic_indicator">
                            <img src={e.cIndicator} alt="" />
                            <span className="span_4">{e.listFour}</span>
                          </span>
                        </li>
                        <li className="list_c">
                          <span className="comic_indicator">
                            <img src={e.cIndicator} alt="" />
                            <span className="span_4">{e.listFive}</span>
                          </span>
                        </li>
                      </ul>
                    </p>

                    <span className="span_1">{e.comicAppearaness}</span>
                    <span className="span_2">{e.appearDes}</span>
                    <div className="span_div">
                      <span className="span_1">writer :</span>
                      <a className="a_1" href={e.writer}>
                        {e.writerName}
                      </a>
                    </div>
                    <div className="span_div">
                      <span className="span_1">Artist :</span>
                      <span className="span_2">{e.artist}</span>
                    </div>
                    <div className="span_div">
                      <span className="span_1">price :</span>
                      <span className="span_2">{e.comicPrice}</span>
                    </div>
                    <div className="order_div">
                      <img src="./Assets/order.png" alt="" />
                    </div>
                  </div>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div className="comic_sep"></div>
    </div>
  );
}

export default Comic;
