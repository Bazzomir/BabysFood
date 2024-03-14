import React, { useEffect, useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import RecipeCard from '../../component/recipeCard';

export default function Brunch() {
    const [brunch, setBrunch] = useState([]);

    function getBrunch() {
        fetch(`${api.root}/recipes/brunch`)
            .then(res => res.json())
            .then(data => {
                setBrunch(data.recipes)
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getBrunch();
    }, []);

    return (
        <div className="container" >
            <div className="row" >
                <div className="row">
                    <h2 className="title">Brunch
                        <hr className='mt-2' />
                    </h2>
                </div>
                {brunch.map(recipe => {
                    return (
                        <div className={`${brunch.length > 2 ? 'col-4' : 'col-6'} mb-5`} key={recipe._id}>
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
