import React from 'react';
import './jobsCategory.scss';


const CategoryCard = ({Icon, header, body}) => {
  return (
    <div className="categoryCard">
            <div className="circle"><Icon className="icon" fill="#54BD7F"/></div>
            <p className="header">{header}</p>
            <p className="body">{body}</p>
    </div>
  );
}

export default CategoryCard;
