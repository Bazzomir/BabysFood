import React from 'react';

const RecipeCategoryBadge = ({ category, className }) => {
  return (
    <span className={className}>
      {category}
    </span>
  );
};

export default RecipeCategoryBadge;
