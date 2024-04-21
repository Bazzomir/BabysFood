import React from "react";

const TitleWithLine = ({ title, className }) => {
  return (
    <div className="col-12 px-0 w-100">
        <h2 className="title">
          {title}
        </h2>
        <hr className={`mt-1 ${className}`} />
    </div>
  )
};

export default TitleWithLine;