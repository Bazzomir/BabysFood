import React from "react";

const TitleWithLine = ({ title, additionalClass }) => {
  return (
    <div className="col-12 px-0 w-100">
        <h2 className="title">
          {title}
        </h2>
        <hr className={`mt-1 ${additionalClass}`} />
    </div>
  )
};

export default TitleWithLine;