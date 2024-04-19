import React from "react";

const TitleWithLine = ({ title, additionalClass }) => {
  return (
    <div className="row">
      <div className="col px-0">
        <h2 className="title">
          {title}
        </h2>
        <hr className={`mt-1 ${additionalClass}`} />
      </div>
    </div>
  )
};

export default TitleWithLine;