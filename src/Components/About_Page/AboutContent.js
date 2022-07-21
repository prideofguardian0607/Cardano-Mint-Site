import { Grid } from "@mui/material";
import React from "react";

function AboutContent() {
  const aboutPageData = [
    {
      personSrc: "./Assets/about_2.png",
      personTitle: "Danny Tailor",
      personDes:
        "Danny Taylor is the brain behind Salt Monsters. He loves comic books, crypto, NFT's, art, aliens, and lives on the Outer Banks of North Carolina.  Mr. Taylor  has designed graphics professionally since the late 1990's. He is also the owner of 2FIVE2 ",
    },
    {
      personSrc: "./Assets/about_1.png",
      personTitle: "M . Ruolngul",
      personDes:
        "Mike Ruolngul of Mizoram, India is an amazing Illustrator with over 17 years of experience. He sketched, inked, and colored both Salt Monsters comic books and is now working on the first NFT collection. ",
      contentWrap: "row-reverse",
    },
  ];
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}>
          {/* Nested Grid */}
          {aboutPageData.map((e) => {
            return (
              <div className="spacing_container">
                <Grid
                  container
                  direction={e.contentWrap}
                  alignItems="center"
                  justifyContent="space-evenly"
                >
                  <Grid item lg={5}>
                    <img src={e.personSrc} alt="" className="person_img" />
                  </Grid>
                  <Grid item lg={6}>
                    <h1 className="about_heading">{e.personTitle}</h1>
                    <p className="about_para">{e.personDes}</p>
                  </Grid>
                </Grid>
              </div>
            );
          })}
        </Grid>
      </Grid>
      <div className="about_last_content">
        <Grid container justifyContent="center">
          <Grid item lg={8}>
            <h1 className="last_content_heading">team</h1>
            <p className="last_content_para">
              Danny and Mike are both supported by a team playing important
              roles in the project. If you would like to join our team, please
              contact us.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutContent;
