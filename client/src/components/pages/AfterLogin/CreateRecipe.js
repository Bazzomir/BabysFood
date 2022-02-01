import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../RESTApi/RestApi'

export default function CreateRecipe() {

    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [preparation, setPreparation] = useState("");
    const [people, setPeople] = useState("");
    const [image, setImage] = useState("https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png");

    const [titleError, setTitleError] = useState("");
    const [shortDescriptionError, setShortDescriptionError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [categoryError, setCategoryError] = useState("");

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const formRecipesValidation = () => {
        const titleError = {};
        const shortDescriptionError = {};
        const descriptionError = {};
        const categoryError = {};

        let isValid = true;

        if (title.trim().length === 0) {
            titleError.titleRequired = "Title is required";
            isValid = false;
        }

        if (shortDescription.trim().length === 0) {
            shortDescriptionError.shortDescriptionRequired = "Short Description is required";
            isValid = false;
        }

        if (description.trim().length === 0) {
            descriptionError.descriptionRequired = "Recipe is required";
            isValid = false;
        }

        if (category.trim().length === 0) {
            categoryError.categoryRequired = "Recipe is required";
            isValid = false;
        }

        setTitleError(titleError)
        setShortDescriptionError(shortDescriptionError)
        setDescriptionError(descriptionError)
        setCategoryError(categoryError)
        return isValid;
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();

        const isValid = formRecipesValidation();

        if (!isValid)
            return

        const formData = new FormData();
        const imageUpload = document.querySelector('input[type="file"]');

        formData.append('title', title);
        formData.append('short_description', shortDescription);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('preparation', preparation);
        formData.append('people', people);
        formData.append('image', imageUpload.files[0]);

        fetch(`${api.root}/recipes/createrecipes`, {
            method: 'PATCH',
            headers: {
                // 'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        })
            .then(res => {
                if (res.status === 401 || res.status === 500) {
                    alert("Token expired");
                    localStorage.removeItem("token");
                    window.location = "/login";
                }
                alert(`Recipes is created`)
                window.location = "/myrecipes"
            })
            .catch(err => alert(err))
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col" >
                    <h3 id="h3Title" className='mb-2'>Create recipes</h3><hr className='col-sm-12 ' />
                </div>
                <div className="col-sm-1 mt-5" align='end'>
                    <Link to="/myrecipes">
                        <button type="button" className="btn btn-outline-light" id="plusAndBack">
                            <svg xmlns="http://www.w3.org/2000/svg" id="icons" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-3" xs={4} md={2}>
                    <div className="col">
                        <label>Recipe Image</label>
                    </div>
                    <div className="col">
                        <img style={{ width: '171px', height: '180px' }} alt=" " src={image} />
                    </div>
                    <br />
                    <div className="col">
                        <button variant="outline-secondary" onClick={() => document.getElementById("fileinput").click()} type="submit" className="btn btn-outline-secondary">UPLOAD IMAGE</button>
                        <input id="fileinput" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
                    </div>
                </div>
                <div className="col-9" xs={8} md={6}>
                    <form name="createForm" className='form row' >
                        <div className="col-7">
                            <div className="row">
                                <div className="form-group col-12 mb-3">
                                    <label>Recipe Title</label>
                                    <input className="form-control" type="RecipeTitle" placeholder="Recipe Title" value={title} required
                                        onChange={e => { setTitle(e.target.value) }} />
                                    {Object.keys(titleError).map((key) => {
                                        return <div className='text-danger'>{titleError[key]}</div>
                                    })}
                                </div>
                                <div className="form-group col-4">
                                    <label style={{ width: "100%" }}>Category
                                        <select className="form-control" placeholder="Choose..." value={category || "none"} required
                                            onChange={e => { setCategory(e.target.value) }}>
                                            <option value="none" disabled selected>Choose...</option>
                                            <option value="Breakfast">Breakfast</option>
                                            <option value="Brunch">Brunch</option>
                                            <option value="Lunch">Lunch</option>
                                            <option value="Dinner">Dinner</option>
                                        </select>
                                    </label>
                                    {Object.keys(categoryError).map((key) => {
                                        return <div className='text-danger'>{categoryError[key]}</div>
                                    })}
                                </div>
                                <div className="form-group col-4">
                                    <label>Preparation Time</label>
                                    <input className="form-control" type='number' value={preparation} required
                                        onChange={e => { setPreparation(e.target.value) }} />
                                </div>
                                <div className="form-group col-4">
                                    <label>No. People</label>
                                    <input className="form-control" type='number' value={people} required
                                        onChange={e => { setPeople(e.target.value) }} />
                                </div>
                            </div>
                            <div className="form-group mt-4" id="exampleFormControlTextarea1">
                                <label>Short Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={shortDescription} required
                                    onChange={e => { setShortDescription(e.target.value) }} />
                                {Object.keys(shortDescriptionError).map((key) => {
                                    return <div className='text-danger'>{shortDescriptionError[key]}</div>
                                })}
                            </div>
                        </div>
                        <div className="col md-4" xs={6}>
                            <div className="form-group mb-3" id="exampleFormControlTextarea1">
                                <label>Recipe</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={description} required
                                    onChange={e => { setDescription(e.target.value) }} />
                                {Object.keys(descriptionError).map((key) => {
                                    return <div className='text-danger'>{descriptionError[key]}</div>
                                })}
                            </div>
                        </div>
                        <div className="row">
                            <button variant="success" className="btn btn-success col-2" onClick={handleSubmitClick}>SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
