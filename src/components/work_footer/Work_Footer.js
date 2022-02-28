import React from "react";
import asset_1 from "../../assets/asset1.svg";
import asset_3 from "../../assets/asset3.svg";

function Work_Footer() {
  return (
    <div className="footer-container">
      <footer className="custom-page-footer">
        <img src={asset_1} alt="Stylized Graphic Image" className="asset-1 asset-sm" />
        <img src={asset_3} alt="Stylized Graphic Image" className="asset-3 asset-sm" />
      </footer>
    </div>
  );
}

export default Work_Footer;
