import * as React from "react";
import { useState, useEffect} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

import "./navbar.css";
import { Grid } from "@mui/material";
import Tab from "./Tab";

const drawerWidth = 300;

function DrawerAppBar(props) {
  const [isActive, setIsActive] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [balance, setBalance] = React.useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // useEffect(() => {
  //   const t = async () => {
  //     const _connected = await props.isConnected();
  //     alert(_connected)
  //     setConnected(_connected);
  //   };
  //   t();
  // }, []);

  const namiWalletConnect = async () => {
    const _connected = await props.connectWallet();
    setConnected(_connected);
    const _balance = await props.getBalance();
    setBalance(_balance.balance);
  }

  const yooriWalletConnect = () => {

  }  

  const walletConnection = async() => {
    
  }
  useEffect(() => {
    console.log(props)
    walletConnection();
  }, [])

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="mobile_drawer"
    >
      <Divider />
      <div className="mobile_spacing"></div>
      <li className="nav_mobile_con">
        <Link to={`/`} className="nav_mobile ">
          home
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/roadmap`} className="nav_mobile ">
          roadmap
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/`} className="nav_mobile  ">
          comic books
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/collection`} className="nav_mobile  ">
          NFT{" "}
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/game`} className="nav_mobile  ">
          game{" "}
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/tokens`} className="nav_mobile  ">
          Tokens{" "}
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/about`} className="nav_mobile ">
          about us
        </Link>
      </li>
      <li className="nav_mobile_con">
        {" "}
        <Link to={`/blogs`} className="nav_mobile ">
          blog
        </Link>
      </li>
      <li className="nav_mobile_con">
        <Link to={`/contact`} className="nav_mobile ">
          contact us
        </Link>
      </li>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="navbar_main">
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={10}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <AppBar component="nav" className="navbar_color">
              <Toolbar>
                <Grid container justifyContent="center">
                  <Grid item xs={12} lg={11}>
                    {/* NESTED GRID */}
                    <Grid
                      container
                      justifyContent="space-between"
                      sx={{ justifyContent: { xs: "space-between" } }}
                      alignItems="center"
                    >
                      <Grid item xs={3} lg={1.5}>
                        <Link to={`/`}>
                          <img
                            src="./Assets/logo-200.png"
                            sx={{
                              flexGrow: 0,
                              display: { xs: "none", sm: "block" },
                            }}
                            alt=""
                            className="logo_img"
                          />
                        </Link>
                      </Grid>
                      <Grid item xs={0} md={8} lg={8}>
                        <Box
                          sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                          }}
                        >
                          <ul className="nav_ul">
                            <li className="nav_li">
                              <Link to={`/`} className="nav_li">
                                home
                              </Link>
                            </li>
                            <li className="nav_li">
                              <Link to={`/roadmap`} className="nav_li">
                                roadmap
                              </Link>
                            </li>
                            <li className="nav_li">
                              <Link to={`/collection`} className="nav_li">
                                NFT collection{" "}
                              </Link>
                            </li>
                            <li className="nav_li">
                              <Link to={`/game`} className="nav_li">
                                game{" "}
                              </Link>
                            </li>
                            <li className="nav_li">
                              <Link to={`/tokens`} className="nav_li">
                                Tokens{" "}
                              </Link>
                            </li>
                            <li className="nav_li">{<Tab />}</li>
                          </ul>
                        </Box>
                      </Grid>
                      <Grid item xs={6} lg={2}>
                        <Box sx={{ display: { xs: "block", sm: "block" } }}>
                          <buttton className="dropDown">
                            <div
                              className="dropDown-btn"
                              onClick={(e) => setIsActive(!isActive)}
                            >
                              <h4 className="btn_text">{connected ? balance + " ADA" : "Connect to Wallet"}</h4>{" "}
                              <span>
                                <ExpandMoreIcon className="btn-Icon" />
                              </span>
                            </div>
                            {isActive && (
                              <div className="dropDown-content">
                                <div className="dropDown-item">
                                  <div className="dropDown-itemIcon">
                                    <img src="./Assets/nami.png" />
                                  </div>
                                  <div className="dropDown-itemText" onClick={namiWalletConnect}>
                                    Nami Wallet
                                  </div>
                                </div>
                                <div className="dropDown-item">
                                  <div className="dropDown-itemIcon">
                                    <img src="./Assets/yarho.png" />
                                  </div>
                                  <div className="dropDown-itemText" onClick={yooriWalletConnect}>
                                    Yoroi Wallet
                                  </div>
                                </div>
                              </div>
                            )}
                          </buttton>
                        </Box>
                      </Grid>
                      <Grid item xs={1} lg={0}>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: "none" } }}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
          </Box>
          {/* NESTED GRID */}
        </Grid>
      </Grid>
    </div>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
