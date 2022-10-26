import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorySummary from '../CategorySummary/CategorySummary';
import Course from '../Course/Course';

const Category = () => {
    const allresults=useLoaderData();
    console.log(allresults);
    
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {
                allresults.map(result=> <CategorySummary key={result.id} result={result} ></CategorySummary>)
            }
        </div>
    );
};

export default Category;