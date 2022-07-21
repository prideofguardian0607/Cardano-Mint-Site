import { Grid } from "@mui/material";
import React from "react";

function Team() {
  const teamData = [
    {
      teamSrc: "./Assets/team_2.png",
      teamTitle: "danny taylor",
      teamDes:
        "Danny Taylor is the brain behind Salt Monsters. He loves comic books, crypto, NFT's, art, aliens, and lives on the Outer Banks of North Carolina.  Mr. Taylor  has designed graphics professionally since the late 1990's. ",
    },
    {
      teamSrc: "./Assets/team_1.png",
      teamTitle: "Mike Ruolngul",
      teamDes:
        "Mike Ruolngul of Mizoram, India is an amazing Illustrator with over 17 years of experience. He sketched, inked, and colored both Salt Monsters comic books and is now working on the first NFT collection. ",
    },
  ];
  return (
    <div className="team_main">
      <h1 className="cosmic_heading">team</h1>
      <div className="content_container">
        <Grid container justifyContent="center">
          <Grid item xs={11} lg={10}>
            {/* NESTED GRID */}
            <Grid container justifyContent="center">
              {teamData.map((e) => {
                return (
                  <Grid item sm={6} lg={4.9}>
                    <div className="comic_card">
                      <div className="team_img_div">
                        <img src={e.teamSrc} className="team_img" alt="" />
                      </div>
                      <div className="comic_des">
                        <h2 className="team_title">{e.teamTitle}</h2>
                        <p className="team_para">{e.teamDes}</p>
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
      </div>
    </div>
  );
}

export default Team;
