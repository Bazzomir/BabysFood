import React, { useEffect, useState } from "react";
import { api } from "../../../RESTApi/RestApi";
import { useParams } from "react-router-dom";
import defaultImgRecipe from '../../../assets/defaultImgRecipe.jpg'

export default function EditRecipe() {

    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [preparation, setPreparation] = useState("");
    const [people, setPeople] = useState("");
    const [image, setImage] = useState(null);

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const getMyRecipe = () => {
        fetch(`${api.root}/recipes/myrecipes/${id}`, {
            headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
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
                setTitle(data.recipe.title);
                setShortDescription(data.recipe.short_description);
                setDescription(data.recipe.description);
                setCategory(data.recipe.category);
                setPreparation(data.recipe.preparation);
                setPeople(data.recipe.people);

                if (data.recipe.image !== undefined) {
                    setImage(`${api.root}/${data.recipe.image}`);
                } else
                    setImage(defaultImgRecipe);

            })
    }

    useEffect(() => {
        getMyRecipe();
    }, []);

    const openFileInput = (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.getElementById("fileinput1").click();
    }

    const editRecipe = (event) => {
        event.preventDefault();

        const formData = new FormData();
        const imageUpload = document.querySelector('input[type="file"]');

        formData.append('title', title);
        formData.append('short_description', shortDescription);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('preparation', preparation);
        formData.append('people', people);
        formData.append('image', imageUpload.files[0]);

        fetch(`${api.root}/recipes/updateRecipe/${id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
            body: formData
        })
            .then(res => {
                if (res.status === 401 || res.status === 500) {
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
            <div className="row pt-5 pb-6">
                <div className="row">
                    <div className="col" >
                        <h2 className="title">Edit recipes</h2><hr className="mt-2" />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-3">
                        <div className="col">
                            <label htmlFor="recipeImage">Recipe Image</label>
                        </div>
                        <div className="col">
                            <img style={{ width: '200px', height: '200px', borderRadius: '18px' }} alt="Recipe Image" src={image} />
                        </div>
                        <br />
                        <div className="col">
                            <button onClick={openFileInput} type="submit" className="btn btn-grey">UPLOAD IMAGE</button>
                            <input id="fileinput1" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
                        </div >
                    </div>
                    <div className="col-9">
                        <form name="editRecipeForm" className="row">
                            <div className="col-7">
                                <div className="row">
                                    <div className="form-group col-12 mb-3">
                                        <label htmlFor="recipeTitle">Recipe Title</label>
                                        <input className="form-control" id="recipeTitle" type="text" value={title} required
                                            onChange={e => { setTitle(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipeCategory">Category
                                        </label>
                                        <select className="form-control" id="recipeCategory" value={category} required
                                            onChange={e => { setCategory(e.target.value) }}>
                                            <option value="" disabled selected id="none">Choose...</option>
                                            <option value="Breakfast" id="Breakfast" >Breakfast</option>
                                            <option value="Brunch" id="Brunch" >Brunch</option>
                                            <option value="Lunch" id="Lunch" >Lunch</option>
                                            <option value="Dinner" id="Dinner" >Dinner</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipePreparationTime">Preparation Time</label>
                                        <input className="form-control" id="recipePreparationTime" type="number" value={preparation} required
                                            onChange={e => { setPreparation(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipeNumPeople">No. People</label>
                                        <input className="form-control" id="recipeNumPeople" type="number" value={people} required
                                            onChange={e => { setPeople(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="recipeShortDes">Short Description</label>
                                    <textarea className="form-control" id="recipeShortDes" rows="3" value={shortDescription} required
                                        onChange={e => { setShortDescription(e.target.value) }} />
                                </div>
                            </div>
                            <div className="col md-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="recipeDes" >Recipe</label>
                                    <textarea className="form-control" id="recipeDes" rows="10" value={description} required
                                        onChange={e => { setDescription(e.target.value) }} />
                                </div>
                            </div>
                            <div className="pt-3">
                                <button variant="success" className="btn btn-green col-2" onClick={editRecipe}>SAVE</button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </div>
    )
}