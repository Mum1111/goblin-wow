
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
// import "../../assest/font/iconfont.css";
const Navbar = () => {
  const [navIndex, setNavIndex] = useState("");

  let history = useNavigate();
  const saveIndex = (item) => {
    setNavIndex(item);
  };
  return (
    <>
      <nav>
        <div className="navigation-buttons">
          <div
            className="button-icon"
            onClick={() => {
              history(-1);
              setTimeout(()=> {
                setNavIndex(window.location.pathname)
              },0)
            }}
          >
            <div className="font-icon">
              <i className="iconfont icon-arrowleft"></i>
            </div>
          </div>
          <div
            className="button-icon"
            onClick={() => {
              history(1);
              setTimeout(()=> {
                setNavIndex(window.location.pathname)
              },0)
            }}
          >
            <div className="font-icon">
              <i className="iconfont icon-arrowright"></i>
            </div>
          </div>
        </div>
        <div className="navigation-links">
          <div
            className="link"
            style={{
              color: navIndex === "/" && window.location.pathname === '/' ? "#335eea" : "#000",
            }}
            onClick={() => {
              saveIndex("/");
            }}
          >
            <Link to="/">全部</Link>
          </div>
          <div
            className="link"
            style={{
              color: navIndex === "/sale" && window.location.pathname === '/sale' ? "#335eea" : "#000",
            }}
            onClick={() => {
              saveIndex("/sale");
            }}
          >
            <Link to="/sale">折扣</Link>
          </div>
          <div
            className="link"
            style={{
              color: navIndex === "/wish" && window.location.pathname === '/wish' ? "#335eea" : "#000",
            }}
            onClick={() => {
              saveIndex("/wish");
            }}
          >
            <Link to="/wish">心愿单</Link>
          </div>
        </div>
        <div className="right-part">
          <div className="search-box">
            <div className="container">
              <div className="input">
                <div className="search-icon">
                  <i className="iconfont icon-search"></i>
                </div>
                <input type="search" placeholder={"搜索"} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
