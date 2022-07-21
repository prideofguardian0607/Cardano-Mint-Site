import { Grid } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="footer_main">
      <Grid container>
        <Grid item xs={12} lg={12} className="footer_container">
          <p className="footer_para">© 2022 ~ Salt Monsters</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
