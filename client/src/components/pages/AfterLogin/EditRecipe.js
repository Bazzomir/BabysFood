import React, { useEffect, useState } from "react";
import { api } from "../../../RESTApi/RestApi";
import { useParams } from "react-router-dom";

export default function EditRecipe() {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [preparation, setPreparation] = useState("");
    const [people, setPeople] = useState("");

    const getMyRecipe = () => {
        fetch(`${api.root}/recipes/myrecipes/${id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => {
                if (res.status === 401) {
                    alert("Loggin first");
                    localStorage.removeItem('token');
                    window.location = "/login";
                }
                return res.json();
            })
            .then(data => {
                setTitle(data.recipe.title)
                setShortDescription(data.recipe.short_description)
                setDescription(data.recipe.description)
                setCategory(data.recipe.category)
                setPreparation(data.recipe.preparation)
                setPeople(data.recipe.people)
            })
    }

    useEffect(() => {
        getMyRecipe();
    }, []);

    const editRecipe = (event) => {
        event.preventDefault();

        let recipe = {
            title: title,
            short_description: shortDescription,
            description: description,
            category: category,
            preparation: preparation,
            people: people
        }
        
        fetch(`${api.root}/recipes/updateRecipe/${id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe)
        })
            .then(res => {
                if (res.status === 401) {
                    alert("Token expired");
                    localStorage.removeItem("token");
                    window.location = "/login";
                }
                return res.json();
            })
            .then(data => {
                if (data.error) {
                    alert(data.message)
                } else { window.location = "/myrecipes" }
            })
            .catch(err => alert(err))
    }

    return (
        <div className="container">
            <div className="row"><h3 id="h3Title">My Recipes<hr /></h3></div>
            <div className="row" style={{ marginTop: "5%" }}>
                <div className="col">
                    <form name="createForm" className='form' style={{ width: "80%" }} >
                        <div className="row mb-3">
                            <div className="col">
                                <label>Recipe Title</label>
                                <input className="form-control" onChange={(e) => setTitle(e.target.value)} defaultValue={title} type="text" />
                            </div>
                            <div className="col">
                                <label>Category
                                    <select className="form-control" onChange={(e) => setCategory(e.target.value)} defaultValue={category} aria-label="Default select example">
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Brunch">Brunch</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Preparation Time</label>
                                <input className="form-control" onChange={(e) => setPreparation(e.target.value)} defaultValue={preparation} type="number" />
                            </div>
                            <div className="col">
                                <label>No. People</label>
                                <input className="form-control" onChange={(e) => setPeople(e.target.value)} defaultValue={people} type="number" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label>Short Description</label>
                                <textarea className="form-control" onChange={(e) => setShortDescription(e.target.value)} defaultValue={shortDescription} type="text" />
                            </div>
                            <div className="col">
                                <label>Recipe</label>
                                <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} defaultValue={description} type="text" />
                            </div>
                        </div>
                        <button variant="success" className="btn btn-success" onClick={editRecipe} >Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}