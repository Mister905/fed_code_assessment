import React from "react";
import asset_1 from "../../assets/asset1.svg";
import asset_2 from "../../assets/asset2.svg";
import asset_3 from "../../assets/asset3.svg";

function Work_Footer() {
  return (
    <div>
      <footer className="custom-page-footer">
        <img src={asset_1} alt="" className="asset-1 asset-sm" />
        <img src={asset_2} alt="" className="asset-2 asset-sm" />
        <img src={asset_3} alt="" className="asset-3 asset-sm" />
      </footer>
    </div>
  );
}

export default Work_Footer;
