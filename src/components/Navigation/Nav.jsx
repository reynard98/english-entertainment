import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { assets } from "../../assets/assets";

const Nav = () => {
  return (
    <div className="navigation">
      <p>
        <span>EN</span>Entertainment
      </p>
      <div className="navigation-list">
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="gemini"> Ask Me</Link>
          </li>
          <li>
            <Link to="">ダッシュボード</Link>
          </li>
          <li>
            <Link className="upgrade" to="">
              プロにアップ
            </Link>
          </li>
        </ul>
        <img src={assets.avatar} alt="" />{" "}
      </div>
    </div>
  );
};

export default Nav;
