import React from 'react';
import MovieData from'../../data';
import './bond.css'
function Bond({match}) { 
     let movie= MovieData.find(movie => movie.id === Number(match.params.id));
    return (
       
        <div>
             
        <h1 className='title'>{movie.title}</h1>
        <div className='forme'>
         {movie.trailer}
         {movie.description}
         </div>
        </div>
           
           
        
    )
}

export default Bond
