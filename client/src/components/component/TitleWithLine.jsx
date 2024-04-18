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

// const TitleWithLineUser = ({ title }) => {
//   return (
//     <div className="col">
//       <h2 className="title">{title}<hr className="mt-2 titleLine" /></h2>
//     </div>
//   )
// };

export default TitleWithLine;