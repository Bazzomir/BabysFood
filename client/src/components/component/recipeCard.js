import React from 'react';
import { api } from '../../RESTApi/RestApi';
import Popup from '../pages/Popup';

function RecipeCard({ recipe }) {
    return (
        <div className="card p-0 overflow-hidden" key={recipe._id}>
            <span className="badge">{recipe.category || "Some food.."}</span>
            <img className='card-image overflow-hidden' src={`${api.root}/${recipe.image}`} alt="" />
            <div className='card-body overflow-hidden'>
                <h5 className='card-title'>
                    {recipe.title}
                </h5>
                <p className='overflow-hidden m-0'>{recipe.short_description}</p>
                <div className="card-bottom">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.preparation}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.people}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icons bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.views}</span>
                    </div>
                    <Popup recipe={recipe} />
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;