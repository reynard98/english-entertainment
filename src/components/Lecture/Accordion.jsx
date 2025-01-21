import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Accordion.css";

const Accordion = () => {
  // ACCORDION DATA
  const vocab = [
    {
      title: "Power",
      content: (
        <div className="accordion-content">
          <h2>単語の説明: Responsibility</h2>
          <p className="subtitle">「責任 (Responsibility)」の意味</p>
          <p className="article">
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
    {
      title: "Responsibility",
      content: (
        <div className="accordion-content">
          <h1>単語の説明: Responsibility</h1>
          <p>「責任 (Responsibility)」の意味</p>
          <p>
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
    {
      title: "Learn",
      content: (
        <div className="accordion-content">
          <h1>単語の説明: Responsibility</h1>
          <p>「責任 (Responsibility)」の意味</p>
          <p>
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
  ];

  const grammars = [
    {
      title: "Power",
      content: (
        <div className="accordion-content">
          <h2>単語の説明: Responsibility</h2>
          <p className="subtitle">「責任 (Responsibility)」の意味</p>
          <p className="article">
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
    {
      title: "Responsibility",
      content: (
        <div className="accordion-content">
          <h1>単語の説明: Responsibility</h1>
          <p>「責任 (Responsibility)」の意味</p>
          <p>
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
    {
      title: "Learn",
      content: (
        <div className="accordion-content">
          <h1>単語の説明: Responsibility</h1>
          <p>「責任 (Responsibility)」の意味</p>
          <p>
            Responsibilityとは、自分の仕事や役割としてやるべきことや、責任を負うことを意味します。
            <span> “ペットの世話をするのはあなたの責任です。”</span>
          </p>
        </div>
      ),
    },
  ];

  // Single shared state for all accordions
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to handle accordion toggle
  const toggleAccordion = (section, index) => {
    const key = `${section}-${index}`;
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <div>
      <div className="header">
        <h1>「大いなる力には大いなる責任が伴う」</h1>
        <div className="tag-wrap">
          <p className="tag">アクション系</p>
          <p className="tag">ドラマチック</p>
        </div>
        <img src={assets.video_frame} alt="" />
      </div>

      <div className="content-wrap">
        <div className="context">
          <h2>コンテキスト</h2>
          <p>
            このクリップでは、高校生のピーター・ポーカーが車の中でベンおじさんと心のこもった会話をしています。ベンおじさんは、ピーターに重要な人生の教訓を伝えます。それは、**「大いなる力には大いなる責任が伴う」**というものです。
          </p>
        </div>

        {/* Vocabulary Accordion */}
        <div className="accordion-container">
          <h2>単語</h2>
          {vocab.map((item, index) => (
            <div key={index} className="accordion-section">
              <button
                className="accordion-button"
                onClick={() => toggleAccordion("vocab", index)}
              >
                {item.title}
                <img
                  src={assets.open_accordion}
                  alt="plus icon img"
                  className={
                    activeAccordion === `vocab-${index}` ? "icon-active" : ""
                  }
                />
              </button>
              {activeAccordion === `vocab-${index}` && (
                <div className="accordion-content">
                  {item.content}
                  <button className="close-button" onClick={toggleAccordion}>
                    閉める
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Grammar Accordion */}
        <div className="accordion-container">
          <h2>文法</h2>
          {grammars.map((item, index) => (
            <div key={index} className="accordion-section">
              <button
                className="accordion-button"
                onClick={() => toggleAccordion("grammar", index)}
              >
                {item.title}
                <img
                  src={assets.open_accordion}
                  alt="plus icon img"
                  className={
                    activeAccordion === `grammar-${index}` ? "icon-active" : ""
                  }
                />
              </button>
              {activeAccordion === `grammar-${index}` && (
                <div className="accordion-content">
                  {item.content}{" "}
                  <button className="close-button" onClick={toggleAccordion}>
                    閉める
                  </button>{" "}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
