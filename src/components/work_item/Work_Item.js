import React from "react";

function Work_Item({ case_study }) {

  let { categories, excerpt, link, thumbnail, title } = case_study;
  
  return (
    <div className="row">
      <div className="col s12 m6">
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src={thumbnail} />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
              {title}
            </span>
            <p>{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work_Item;
