import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import M from "materialize-css";
import { useDispatch } from "react-redux";
import { update_selected_filter } from "../../actions/work";
import asset_2 from "../../assets/asset2.svg";

function Work_Header() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.work);

  const { loading_categories } = useSelector((state) => state.work);

  useEffect(() => {
    let nav_tabs = document.getElementById("nav-tabs");
    M.Tabs.init(nav_tabs, {});
  }, [loading_categories]);

  const render_categories = () => {
    return (
      <ul id="nav-tabs" className="tabs tabs-transparent">
        {categories.map(({ title, slug }, i) => {
          return (
            <li
              key={slug}
              className="tab"
              onClick={() => dispatch(update_selected_filter(title))}
              aria-label={`Filter By Category ` + title}
            >
              <a className="nav-tab-link" href={`#` + slug} tabIndex={i}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="header-container">
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <nav className="nav-extended custom-nav">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo custom-work-logo">
                WORK
              </a>
            </div>
            <div className="nav-content custom-nav-content">
              {!loading_categories && render_categories()}
              <div className="row">
                <div className="col col m12">
                  <div className="row">
                    <div className="col m11 pr-0">
                      <div className="nav-underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <img src={asset_2} alt="Stylized Graphic Image" className="asset-2 asset-sm" />
    </div>
  );
}

export default Work_Header;
