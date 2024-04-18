import React from "react";

const TitleWithLine = ({ title }) => {
  return (
    <h2 className="title">
      {title}
      <hr className="mt-2" />
    </h2>
  )
};

export default TitleWithLine;