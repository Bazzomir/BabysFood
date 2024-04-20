import React, { useEffect, useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import RecipeCard from '../../component/RecipeCard';
import TitleWithLine from '../../component/TitleWithLine';

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
            <div className="row pt-5 pb-6">
                <div className="col pb-3">
                    {/* <div className="row">
                    <h2 className="title">Brunch
                        <hr className='mt-2' />
                    </h2>
                </div> */}
                    <TitleWithLine title="Brunch" />
                    <div className="row row-cols-3 d-flex justify-content-around align-items-center gap-5 m-0 pt-3">
                        {brunch.map(recipe => {
                            return (
                                // <div className={`${brunch.length > 2 ? 'col-4' : 'col-6'} pb-5`} key={recipe._id}>
                                    <RecipeCard key={recipe._id} recipe={recipe} />
                                // </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
