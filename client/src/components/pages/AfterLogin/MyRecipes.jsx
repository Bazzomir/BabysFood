import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../RESTApi/RestApi';
import defaultImgRecipe from '../../../assets/defaultImgRecipe.jpg';
// import { useParams } from "react-router-dom";
import ariaLabelText from '../../component/ariaLabelText';
import RecipeCategoryBadge from '../../component/recipeCategoryBadge';

export default function MyRecipes() {

    // const { id } = useParams();
    const [recipes, setRecipes] = useState([]);


    function getMyRecipes() {
        fetch(`${api.root}/recipes/myrecipes`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 500) {
                    alert("Loggin first");
                    localStorage.removeItem('token');
                    window.location = "/login";
                }
                return res.json();
            })
            .then(data => {
                let getRecipesImage = data.recipes.map((recipe) => {
                    if (recipe.image !== undefined) {
                        recipe.image = `${api.root}/${recipe.image}`
                    } else {
                        // recipe.image = "https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png"
                        recipe.image = defaultImgRecipe;
                    }
                    return recipe;

                })
                setRecipes(getRecipesImage);
            })
    }

    useEffect(() => {
        getMyRecipes();
    }, [])

    function deleteMyRecipe(id) {
        fetch(`${api.root}/recipes/myrecipes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 500) {
                    alert("Loggin first");
                    localStorage.removeItem('token');
                    window.location = "/login";
                }
                getMyRecipes();
            })
            .catch(err => alert(err))
    }

    return (
        <div className="container">
            <div className="row pt-5 pb-6 xxx">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title">My recipes<hr className="mt-2 titleLine" /></h2>
                    </div>
                </div>
                <div className="col d-flex justify-content-end aling-items-center yyy">
                    <Link to="/createrecipes">
                        <button type="button" className="btn btn-outline-light" id="plusAndBack" aria-label={ariaLabelText.myRecipesAriaLabel.createRecipeBtnAriaLabel}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="plusAndBackIcon">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Recipe Name</th>
                                <th>Category</th>
                                <th className="col-6">Created On</th>
                                <th colSpan='3'></th>
                                <th></th>
                                <th className="align-self-end" style={{ textAlign: "right" }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe, i) => {
                                return (
                                    <tr key={i} style={{ verticalAlign: "middle", borderRadius: "25px" }} className="customTR">
                                        <td style={{ width: "100px", height: "100px", textAlign: "center" }}>
                                            <a href={`/myrecipes/${recipe._id}`} style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold' }} aria-label={ariaLabelText.myRecipesAriaLabel.editRecipeBtnAriaLabel}>
                                                <img className="tableImage" alt="Recipe" src={recipe.image ? recipe.image : defaultImgRecipe} />
                                            </a>
                                        </td>
                                        <td><a href={`/myrecipes/${recipe._id}`} style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold' }} aria-label={ariaLabelText.myRecipesAriaLabel.editRecipeBtnAriaLabel}>{recipe.title}</a></td>
                                        {/* <td><span className="tableBadge">{recipe.category}</span></td> */}
                                        <td><RecipeCategoryBadge category={recipe.category} className="tableBadge" /></td>
                                        <td>{recipe.createdAt.slice(0, 10)}</td>
                                        <td colSpan="3"></td>
                                        <td></td>
                                        <td style={{ textAlign: "right" }}>
                                            <button className="btn btn-primary-outline" variant="link" onClick={() => deleteMyRecipe(recipe._id)} aria-label={ariaLabelText.myRecipesAriaLabel.deleteRecipeBtnAriaLabel}>
                                                {/* <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="deleteIcon">
                                                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
