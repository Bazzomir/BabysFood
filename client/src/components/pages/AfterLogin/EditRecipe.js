import React, { useEffect, useState } from "react";
import { api } from "../../../RESTApi/RestApi";
import { useParams } from "react-router-dom";

export default function EditRecipe() {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [preparation, setPreparation] = useState("");
    const [people, setPeople] = useState("");
    const [content, setContent] = useState("");
    const [description, setDescription] = useState("");

    const getMyRecipe = () => {
        fetch(`${api.root}/recipes/myrecipes/${id}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(res => res.json()
                .then(data => {
                    setTitle(data.recipe.title)
                    setCategory(data.recipe.category)
                    setPreparation(data.recipe.preparation)
                    setPeople(data.recipe.people)
                    setContent(data.recipe.content)
                    setDescription(data.recipe.description)
                }))
    }

    useEffect(() => {
        getMyRecipe();
    });

    const editRecipe = () => {
        let recipe = {
            title: title,
            category: category,
            preparation: preparation,
            people: people,
            content: content,
            description: description
        }

        fetch(`${api.root}/recipes/myrecipes/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
            .then(res => res.json()
                .then(data => {
                    if (data.err === true) {
                        alert(data.message)
                    } else { window.location = "/myrecipes" }
                }))
            .catch(err => alert(err))
    }

    return (
        <div className="container">
            <div className="row"><h3 id="h3Title">My Recipes</h3></div>
            <div className="row" style={{ marginTop: "7%" }}>
                <div className="col">
                    <form name="createForm" className='form' style={{ width: "80%" }} >
                        <div className="row mb-3">
                            <div className="col">
                                <label>Recipe Title</label>
                                <input className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} type="text" />
                            </div>
                            <div className="col">
                                <label>Category</label>
                                <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Brunch">Brunch</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <label>Preparation Time</label>
                                <input className="form-control" onChange={(e) => setPreparation(e.target.value)} value={preparation} type="number" />
                            </div>
                            <div className="col">
                                <label>No. People</label>
                                <input className="form-control" onChange={(e) => setPeople(e.target.value)} value={people} type="number" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label>Short Description</label>
                                <input className="form-control" onChange={(e) => setContent(e.target.value)} value={content} type="text" />
                            </div>
                            <div className="col">
                                <label>Recipe</label>
                                <input className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} type="text" />
                            </div>
                        </div>
                        <button onClick={editRecipe} type="button" variant="success">Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}