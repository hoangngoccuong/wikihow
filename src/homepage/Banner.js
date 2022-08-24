import React, { Component } from 'react'
import '../css/homepage/Header.css'
export default class Banner extends Component {
  render() {
    
    return (
      <section className="container user_flex banner">
        <div className="banner__item">
          <h3>Chào mừng bạn đến với 
            wikiTrees , cuốn cẩm nang 
            đáng tin cậy nhất về cây trên 
            internet.</h3>
          <h4>Bạn muốn tìm cây gì trên wikiTrees ?</h4>
          <div className="input">
            <input type="text" placeholder="Tìm cây..." />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <div className="banner__item">
          <img src="../images/banner.png" alt="banner_img" />
        </div>
      </section>
    )
  }
}
