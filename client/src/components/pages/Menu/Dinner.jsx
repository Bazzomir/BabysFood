import React, { useEffect, useState } from 'react';
import { api } from '../../../RESTApi/RestApi';
import RecipeCard from '../../component/RecipeCard';
import TitleWithLine from '../../component/TitleWithLine';
import Loading from '../../component/Loading';

export default function Dinner() {
    const [Dinner, setDinner] = useState([]);
    const [loading, setLoading] = useState(false);

    function getDinner() {
        setLoading(true);
        fetch(`${api.root}/recipes/Dinner`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                const recipes = data.recipes || [];
                setDinner(data.recipes)
            })
            .catch(err => alert(err))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getDinner();
    }, []);

    if (loading) { return <Loading /> }

    return (
        <div className="container min-vh-100">
            <div className="row pt-5 pb-6">
                <div className="col pb-3">
                    {/* <div className="row">
                    <h2 className="title">Dinner
                        <hr className='mt-2' />
                    </h2>
                </div> */}
                    <TitleWithLine title="Dinner" />
                    <div className="row row-cols-3 d-flex justify-content-around align-items-center gap-5 m-0 pt-3">
                        {Dinner.map(recipe => {
                            return (
                                // <div className={`${Dinner.length > 2 ? 'col-4' : 'col-6'} pb-5`} key={recipe._id}>
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
