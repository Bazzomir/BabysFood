import { React, useEffect, useState } from 'react';
import { api } from '../../RESTApi/RestApi';
import RecipeCard from '../component/recipeCard';

function Homepage() {
    const [NewRecipes, setNewRecipes] = useState([]);
    const [PopularRecipes, setPopularRecipes] = useState([]);

    function getHomePage() {
        fetch(`${api.root}/home`)
            .then(res => res.json())
            .then(data => {
                setPopularRecipes(data.PopularRecipes)
                setNewRecipes(data.NewRecipes)
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getHomePage();
    }, []);

    return (
        <div className='homepage'>
            <div className="container">
                <div className="row" >
                    <div className="row"><h3 id="h3Title">Fresh & New<hr className='mt-2' /></h3></div>
                    {NewRecipes.map(recipe => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
                <div className="row" >
                    <div className="row"><h3 id="h3Title">Most Popular Recipes<hr className='mt-2' /></h3></div>
                    {PopularRecipes.map(recipe => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            </div >
        </div>
    );
}

export default Homepage;