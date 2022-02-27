import React from "react";

function Work_Item({ case_study }) {
  let { categories, excerpt, link, thumbnail, title } = case_study;

  let { title: category_title } = categories[0];

  return (
    <div className="col m6 card custom-card">
      <div className="row">
        <div className="col m4">
          <img class="activator responsive-img" src={thumbnail} />
        </div>
        <div className="col m6">
          <div className="row">
            <div className="col m12">{category_title}</div>
          </div>
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  );
}

export default Work_Item;
