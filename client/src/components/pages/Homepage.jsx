import React, { useEffect, useState } from "react";
import { api } from "../../RESTApi/RestApi";
import RecipeCard from "../component/RecipeCard";
import TitleWithLine from "../component/TitleWithLine";
import Pagination from "../../components/component/Pagination";

function Homepage() {
    const [NewRecipes, setNewRecipes] = useState([]);
    const [PopularRecipes, setPopularRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);

    function getHomePage() {
        setLoading(true);
        fetch(`${api.root}/home`)
            .then(res => res.json())
            .then(data => {
                setNewRecipes(data.NewRecipes);
                setPopularRecipes(data.PopularRecipes);
                setLoading(false);
            })
            .catch(err => {
                alert(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        getHomePage();
    }, []);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = PopularRecipes.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container" loading={loading.toString()}>
            <div className="row pt-5">
                <div className="col pb-3">
                    <TitleWithLine title="Fresh & New" />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-around align-items-center gap-5 m-0 pt-3">
                        {NewRecipes.map(recipe => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="row pt-5 pb-6">
                <div className="col-12 pb-3">
                    <TitleWithLine title="Most Popular Recipes" />
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-around align-items-center gap-5 m-0 pt-3">
                        {currentCards.map(recipe => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))}
                    </div>
                </div>
                <Pagination cardsPerPage={cardsPerPage} totalCards={PopularRecipes.length} paginate={paginate} activePage={currentPage} />
            </div>
        </div>
    );
}

export default Homepage;
