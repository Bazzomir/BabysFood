import React, { useState } from 'react';
import { api } from '../../RESTApi/RestApi';
import Popup from './Popup';
import timeIcon from '../../assets/logo/time-recipe.png';
import eye2 from '../../assets/logo/eye2.png';
import plate1 from '../../assets/logo/plate1.png';
import RecipeCategoryBadge from './recipeCategoryBadge';
import '../../assets/css/card.css';

function RecipeCard({ recipe }) {
    const [isHoveredImage, setIsHoveredImage] = useState(false);
    const [isHoveredParagraph, setIsHoveredParagraph] = useState(false);

    return (
        <div className="card p-0" key={recipe._id}>
            {/* <span className="badge">{recipe.category || "Some food.."}</span> */}
            <RecipeCategoryBadge category={recipe.category || "Some food.."} className="badge" />
            <img className="card-image" alt="Recipe"
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
                        <img src={timeIcon} className="card-bottom--icons" alt="Icon card:Time" />
                        <span className="icon-text ps-1 pe-2">{recipe.preparation}</span>
                        <img src={plate1} className="card-bottom--icons" alt="Icon card:Plate" />
                        <span className="icon-text ps-1 pe-2">{recipe.people}</span>
                        <img src={eye2} className="card-bottom--icons" alt="Icon card:Favourite" />
                        <span className="icon-text ps-1 pe-2">{recipe.views}</span>
                    </div>
                    <Popup recipe={recipe} />
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;