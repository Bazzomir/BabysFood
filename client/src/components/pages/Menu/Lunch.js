import React, { useEffect, useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import RecipeCard from '../../component/recipeCard';

export default function Lunch() {
    const [Lunch, setLunch] = useState([]);

    function getLunch() {
        fetch(`${api.root}/recipes/Lunch`)
            .then(res => res.json())
            .then(data => {
                setLunch(data.recipes)
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getLunch();
    }, []);

    return (
        <div className="container">
            <div className="row" >
                <div className="row">
                    <h2 className="title">Lunch
                        <hr className='mt-2' />
                    </h2>
                </div>
                {Lunch.map(recipe => {
                    return (
                        <div className={`${Lunch.length > 2 ? 'col-4' : 'col-6'} mb-5`} key={recipe._id}>
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
