import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="slider_card">
              <img
                src="./Assets/collection_5.png"
                alt=""
                className="slider_img"
              />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/mint_2.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/mint_3.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/mint_4.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/mint_3.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/nft_4.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/nft_5.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
          <div>
            <div className="slider_card">
              <img src="./Assets/nft_4.png" alt="" className="slider_img" />
              <div className="slider_content">
                <h2 className="slider_title">Lorem ipsum</h2>
                <button className="token_btn">place a bid</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
