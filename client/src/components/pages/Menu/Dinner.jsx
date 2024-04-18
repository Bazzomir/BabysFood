import React, { useEffect, useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import RecipeCard from '../../component/RecipeCard';
import TitleWithLine from '../../component/TitleWithLine';

export default function Dinner() {
    const [Dinner, setDinner] = useState([]);

    function getDinner() {
        fetch(`${api.root}/recipes/Dinner`)
            .then(res => res.json())
            .then(data => {
                setDinner(data.recipes)
            })
            .catch(err => alert(err));
    }

    useEffect(() => {
        getDinner();
    }, []);

    return (
        <div className="container" >
            <div className="row pt-5" >
                {/* <div className="row">
                    <h2 className="title">Dinner
                        <hr className='mt-2' />
                    </h2>
                </div> */}
                    <TitleWithLine title="Dinner" />
                {Dinner.map(recipe => {
                    return (
                        <div className={`${Dinner.length > 2 ? 'col-4' : 'col-6'} pb-5`} key={recipe._id}>
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
