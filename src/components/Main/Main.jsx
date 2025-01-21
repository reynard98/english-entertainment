import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPromt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>
          <span>EN</span>Entertainment
        </p>
        <div className="nav-end-side">
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
          <img src={assets.user_icon} alt="user icon image" />
        </div>
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Student</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Suggest a method to learning English easily and not boring
                </p>
                <img src={assets.compass_icon} alt="compass icon img" />
              </div>

              <div className="card">
                <p>Movies and manga recommended for beginner level student</p>
                <img src={assets.bulb_icon} alt="compass icon img" />
              </div>

              <div className="card">
                <p>How many vocabulary should I know to be good at English.</p>
                <img src={assets.message_icon} alt="compass icon img" />
              </div>

              <div className="card">
                <p>Is mastering English helps you with learning how to code</p>
                <img src={assets.code_icon} alt="compass icon img" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPromt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double check its responeses. Your privacies and gemini responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
