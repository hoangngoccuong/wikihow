import React from 'react';
import '../css/Header.css'

export default function Header() {
  
    return (
        <header id="header" className="container user_flex">
        <div className="user_flex header__left">
          <div className="logo">
            <h3 className="logo-text"><span>wiki</span>Trees</h3>
          </div>
          <form action="#" className="user_flex form-search">
            <input type="text" placeholder="Tìm kiếm bất cứ loài cây nào" className="input-search" />
            <button className="btn btn-search"><i className="fa-solid fa-magnifying-glass" /></button>
          </form>
        </div>
        <div className="menu-right">
          <a><i className="fa-solid fa-user" /></a>
          <a><i className="fa-solid fa-cart-shopping" /></a>
          <a><i className="fa-solid fa-message" /></a>
        </div>
      </header>
    )
}
