import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_categories } from "../../actions/work";
import M from "materialize-css";

function Work_Header() {

  const { categories } = useSelector((state) => state.work);

  useEffect(() => {
    // let nav_tabs = document.getElementById("nav-tabs");
    // M.Tabs.init(nav_tabs, {});
  }, []);

  const render_categories = categories.map((category) => (
    <li key={category.slug}>{category.title}</li>
  ));

  return (
    <div>
      <nav className="nav-extended custom-nav">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            WORK
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <div className="nav-content">
          <ul id="nav-tabs" className="tabs tabs-transparent">
            {render_categories}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Work_Header;
