// import React from 'react'
// import {categoryInfos} from "./CategoryFullInfo";
// import CategoryCard from './CategoryCard';
// import classes from "./category.module.css"
// function Category() {
//   return (
//     <section className={classes.category_container}> 
//        {
//          categoryInfos?.map((infos)=>(
//             <CategoryCard data ={infos}/>
//          ))
//        }
//     </section>
//   )
// };
// export default Category;



import React from 'react';
import { categoryInfos } from './CategoryFullInfo';
import CategoryCard from './CategoryCard';
import classes from './category.module.css';

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos?.map((infos) => (
        <CategoryCard key={infos?.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;
