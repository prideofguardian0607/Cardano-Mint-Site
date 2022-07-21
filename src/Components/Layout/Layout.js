import React from "react";
import About from "../About_Page/About";
import Footer from "../Home_Page/Footer";
import Home from "../Home_Page/Home";
import DrawerAppBar from "../Navbar/Navbar";
import "./layout.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "../Contact_us/Contact";
import Token from "../Token_Page/Token";
import Game from "../Game_Page/Game";
import BlogFull from "../Blog_Page/BlogFull";
import Mint from "../Mint_Page/Mint";
import Collection from "../Collection_Page/Collection";
import Roadmap from "../Roadmap_Page/Roadmap";
import Comic from "../Comic_Page/Comic";

function Layout(props) {
  return (
    <div className="layout_main">
      <DrawerAppBar connectWallet={props.connectWallet} connected={props.connected} getBalance={props.getBalance} isConnected={props.isConnected}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tokens" element={<Token />} />
        <Route path="/game" element={<Game />} />
        <Route path="/blogs" element={<BlogFull />} />
        <Route path="/mint" element={<Mint createPolicy={props.createPolicy} buildFullTransaction={props.buildFullTransaction} />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/comicbooks" element={<Comic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Layout;
