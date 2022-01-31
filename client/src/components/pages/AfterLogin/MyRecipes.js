import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../RESTApi/RestApi';
import { useParams } from "react-router-dom";

export default function MyRecipes() {

    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);

    function getMyRecipes() {
        fetch(`${api.root}/recipes/myrecipes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
                data.recipes.map((recipe) => {
                    if (recipe.image !== undefined) {
                        recipe.image = `${api.root}/${recipe.image}`
                    }else
                        recipe.image="https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png"
                })
                setRecipes(data.recipes)
            })
    }

    useEffect(() => {
        getMyRecipes();
    }, [])

    function deleteMyRecipe(id) {
        fetch(`${api.root}/recipes/myrecipes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
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
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h3 id="h3Title">My recipes<hr className='col-sm-12' /></h3>
                </div>
                <div className="col-sm-1 mt-5" align='end'>
                    <Link to="/createrecipes">
                        <button type="button" className="btn btn-outline-light" id="plusAndBack">
                            <svg xmlns="http://www.w3.org/2000/svg" id="icons" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                    </Link>
                </div>
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
                                <tr key={i} style={{verticalAlign:"middle"}}> 

                                    <td style={{width:"100px", height:"100px",textAlign:"center"}}>
                                        <img style={{maxHeight:"100%", maxWidth:"100%"}} alt="" src={recipe.image}/>
                                    </td>
                                    <td><a href={`/myrecipes/${recipe._id}`} style={{ textDecoration: 'none', color: 'grey', fontWeight: 'bold' }}>{recipe.title}</a></td>
                                    <td><span id="categoryTD">{recipe.category}</span></td>
                                    <td>{recipe.createdAt.slice(0, 10)}</td>
                                    <td colSpan='3'></td>
                                    <td></td>
                                    <td style={{ textAlign: "right" }}>
                                        <button className="btn btn-primary-outline" variant="link" onClick={() => deleteMyRecipe(recipe._id)}>
                                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
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
    )
}
