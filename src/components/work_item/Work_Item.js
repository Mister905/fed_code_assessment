import React from "react";

function Work_Item({ case_study }) {
  let { categories, excerpt, link, thumbnail, title } = case_study;

  let { title: category_title } = categories[0];

  return (
    <div className="col m6 card custom-card">
      <div className="row">
        <div className="col m4">
          <img className="activator responsive-img" src={thumbnail} />
        </div>
        <div className="col m6">
          <div className="row">
            <div className="col m12 bb-white padding-0-col">
              <span className="category-title">{category_title}</span>
            </div>
          </div>
          <div className="row">
            <div className="col m12 padding-0-col">
              <h1 className="case-study-heading">{title}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col m12 padding-0-col">
              <p>{excerpt}</p>
            </div>
          </div>
          <div className="row mb-0">
            <div className="col m12 padding-0-col">
              <a
                className="waves-effect waves-light btn view-case-study-btn right"
                href={link}
                target="_blank"
              >
                <i className="material-icons right">arrow_forward</i>
                View Case Study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work_Item;
