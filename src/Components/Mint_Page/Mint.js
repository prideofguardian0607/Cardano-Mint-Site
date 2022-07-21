import { Grid } from "@mui/material";
import React from "react";
import Responsive from "./Carousel";
import "./mint.css";
function Mint(props) {
  const countStateArray = React.useState(0);
  const count = countStateArray[0];
  const setCount = countStateArray[1];
  const [transactionHash, setTransactionHash] = React.useState();
  const increase = () => {
    setCount(count + 1);
    console.log(props);
  };
  const decrease = () =>
    setCount((prevCount) => {
      if (prevCount <= 0) 
        return 0;
      return prevCount - 1;
  });

  const mint = async () => {
    await props.createPolicy(count + "");
    const tx = await props.buildFullTransaction();
    console.log(typeof tx)
    if ((typeof tx) != 'undefined')
      setTransactionHash("https://testnet.cardanoscan.io/transaction/" + tx);
  };

  return (
    <div className="mint_full_main">
      <h1 className="game_title">Mint</h1>

      <Grid container justifyContent="center">
        <Grid item xs={11} lg={10}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <div className="mint_upper_img"></div>
        </Grid>
      </Grid>
      {/*  */}
      <Grid container justifyContent="center">
        <Grid item lg={10}>
          {/* Nested Grid */}
          <Grid container justifyContent="space-evenly " alignItems="center">
            <Grid item xs={10} md={4} lg={4}>
              <div className="mint_counter">
                <h1 className="counter_heading">lorem ipsum</h1>
                <div className="counter">
                  {/* GRID FOR COUNTER */}
                  <Grid
                    container
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                      justifyContent: {
                        xs: "center",
                        sm: "center",
                        md: "flex-start",
                      },
                    }}
                  >
                    <Grid item xs={2} lg={2}>
                      <button onClick={decrease} className="mint_btn">
                        -
                      </button>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                      <div className="amount_display">
                        <span className="amount_number">{count}</span>
                      </div>{" "}
                    </Grid>
                    <Grid item xs={2} lg={2}>
                      <button onClick={increase} className="mint_btn">
                        +
                      </button>
                    </Grid>
                  </Grid>
                  {/* DETAIL PARA */}
                  <div className="mint_process">
                    <div className="process_para">
                      <span>
                        <img src="./Assets/indicator.png" alt="" />
                      </span>
                      <p className="process_p">
                        Pre - Sale price : 0.52356 ETH + gas
                      </p>
                    </div>
                    {/*  */}
                    <div className="process_para">
                      <span>
                        <img src="./Assets/indicator.png" alt="" />
                      </span>
                      <p className="process_p">
                        Public - Sale price : 0.525 ETH + gas
                      </p>
                    </div>
                    {/*  */}
                    <div className="process_para">
                      <span>
                        <img src="./Assets/indicator.png" alt="" />
                      </span>
                      <p className="process_p">Instant reveal</p>
                    </div>
                  </div>
                </div>
                {/* BUTTON GRID */}
                <Grid
                  container
                  sx={{
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                    },
                  }}
                >
                  <Grid item>
                    <div className="mint_main_btn">
                      <button className="token_btn" onClick={mint}>mint</button>
                    </div>
                    <a target={"_blank"} href={transactionHash} style={{color: 'white'}}>{transactionHash}</a>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={10} lg={5}>
              <img className="mint_img" src="./Assets/mint_upper.png" alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <h1 className="last_mint_heading">more NFT's</h1>
      {/* GRID FOR IMAGE Slider */}
      <Grid container justifyContent="center">
        <Grid item xs={9} lg={11}>
          {/*  */}
          <Responsive />
        </Grid>
      </Grid>
      <div className="mint_seprator"></div>
    </div>
  );
}

export default Mint;
