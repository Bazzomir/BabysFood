import React, { useState } from 'react';
import { api } from '../../RESTApi/RestApi';
import Popup from '../pages/Popup';

function RecipeCard({ recipe }) {
    const [isHoveredImage, setIsHoveredImage] = useState(false);
    const [isHoveredParagraph, setIsHoveredParagraph] = useState(false);

    return (
        <div className="card p-0" key={recipe._id}>
            <span className="badge">{recipe.category || "Some food.."}</span>
            <img className="card-image" alt="Recipe Image"
                src={`${api.root}/${recipe.image}`}
                style={{
                    height: isHoveredParagraph ? "25%" : "250px"
                }}
            />
            <div className="card-body">
                <div className="row"
                    onMouseEnter={() => setIsHoveredParagraph(true) && setIsHoveredImage(true)}
                    onMouseLeave={() => setIsHoveredParagraph(false) && setIsHoveredImage(false)}
                >
                    <h5 className="card-title">
                        {recipe.title}
                    </h5>
                    <p className="m-0 pb-2 overflow-hidden"
                        style={{
                            display: isHoveredImage ? "none" : "block",
                            height: isHoveredParagraph ? "325px" : "210px"
                        }}
                    >{recipe.short_description}</p>
                </div>
                <div className="card-bottom">
                    <div className="col-5 d-flex justify-content-between">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.preparation}</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons" viewBox="0 0 512 512">
                            <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.preparation}</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.people}</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons" viewBox="0 0 512 512">
                            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
                        </svg>
                        <span className="icon-text ps-1 pe-2">{recipe.people}</span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg><span className="icon-text ps-1 pe-2">{recipe.views}</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cardIcons" viewBox="0 0 576 512">
                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                        </svg>
                        <span className="icon-text ps-1 pe-2">{recipe.views}</span>
                    </div>
                    <Popup recipe={recipe} />
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;