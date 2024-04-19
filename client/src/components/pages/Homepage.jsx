import { React, useEffect, useState } from 'react';
import { api } from '../../RESTApi/RestApi';
import RecipeCard from '../component/RecipeCard';
import TitleWithLine from '../component/TitleWithLine';

function Homepage() {
    const [NewRecipes, setNewRecipes] = useState([]);
    const [PopularRecipes, setPopularRecipes] = useState([]);

    function getHomePage() {
        fetch(`${api.root}/home`)
            .then(res => res.json())
            .then(data => {
                setNewRecipes(data.NewRecipes)
                setPopularRecipes(data.PopularRecipes)
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getHomePage();
    }, []);

    return (
        <div className="homepage">
            <div className="container">
                <div className="row pt-5">
                    <div className="col pb-3">
                        {/* <div className="row">
                            <h2 className="title">
                                Fresh & New
                                <hr className="mt-2" />
                            </h2>
                        </div> */}
                        <TitleWithLine title="Fresh & New" />
                        <div className="row row-cols-3 d-flex justify-content-between align-items-center gap-5 m-0 pt-3">
                            {NewRecipes.map(recipe => (
                                <RecipeCard key={recipe._id} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row pt-5 pb-6" >
                    <div className="col-12 pb-3">
                        {/* <h2 className="title">
                            Most Popular Recipes
                            <hr className="mt-2" />
                        </h2> */}
                        <TitleWithLine title="Most Popular Recipes" />
                        <div className="row row-cols-3 d-flex justify-content-between align-items-center gap-5 m-0 pt-3">
                            {PopularRecipes.map(recipe => (
                                <RecipeCard key={recipe._id} recipe={recipe} />
                            ))}
                        </div>
                    </div>
                </div >
            </div>
        </div>
    );
}

export default Homepage;