import React from "react";
import "./right.css";
import AccountMight from "../accountMight/accountMight";

import { RiSearchLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import TrendsComponent from "../trendsComponents/trends";

const Right = () => {
  return (
    <div id="container-right">
      <div id="fixed-search">
        <div id="search-box">
          <input placeholder=" Search Twitter" id="serch-input" type="text" />
          <RiSearchLine id="search-icon" />
        </div>
      </div>

      <div id="image-post-box">
        <div id="box-left-post"></div>
        <div id="box-right">
          <div id="box-up"></div>
          <div id="box-down"></div>
        </div>
      </div>

      <div id="might-like-box">
        <h2 id="title-might">You might like</h2>
        <AccountMight
          verified={false}
          name="User 2"
          id="@User"
          src="data:image/png;base64,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"
        />
    
        <AccountMight
          verified={true}
          name="JavaScript"
          id="@JavaScript"
          src="data:image/jpeg;base64,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"
        />
        <AccountMight
          verified={true}
          name="GitHub"
          id="@github"
          src="data:image/jpeg;base64,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"
        />
        <AccountMight
          verified={true}
          name="React"
          id="@reactjs"
          src="data:image/png;base64,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"
          />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <div id="trends-container">
        <div id="header-trends">
          <p id="trends-text">Trends</p>
          <span id="box-setting-icon">
            <IoSettingsOutline id="setting-icon" />
          </span>
        </div>

        <TrendsComponent name="ReactJs" number="53.2K" />
        <TrendsComponent name="Javascript" number="28.5K" />
        <TrendsComponent name="GitHub" number="15.3K" />
        <TrendsComponent name="Google" number="20.8K" />

        <div id="show-more-box">
          <button id="show-more-btn">Show more</button>
        </div>
      </div>

      <footer id="footer">
        <div id="footer-top">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Terms of Service
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Privacy Policy
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            Cookie Policy
          </a>
        </div>

        <div id="footer-down">
          <a id="trems" href="#" onClick={(e) => e.preventDefault()}>
            Imprint
          </a>
          <a id="privacy" href="#" onClick={(e) => e.preventDefault()}>
            Ads info
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            More...
          </a>

          <a id="cookie" href="#" onClick={(e) => e.preventDefault()}>
            © 2023 Twitter, Inc.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Right;