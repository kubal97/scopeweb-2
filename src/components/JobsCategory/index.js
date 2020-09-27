import React from 'react';
import './jobsCategory.scss';
import { categoryCards } from '../../assets/data';
import CategoryCard from './categoryCard';



const JobsCategory = ({ darkMode }) => {
  return (
    <div id="categories" className={darkMode ? "jobsCategory darkMode" : "jobsCategory"}>
        <h4 className="header">Browse Jobs <span className="green">Category</span></h4>
        <p className="body">Few stray glemas steal into the inner sanctuary, I throw myself down.</p>
        <div className="jobsCategoryContainer">
            {categoryCards.map(category => {
                return <CategoryCard key={category.id} Icon={category.icon} header={category.header} body={category.body} />
            })}
        </div>
    </div>
  );
}

export default JobsCategory;
