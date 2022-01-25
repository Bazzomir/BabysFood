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

    const [titleError, setTitleError] = useState("");
    const [shortDescriptionError, setShortDescriptionError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    const formRecipesValidation = () => {
        const titleError = {};
        const shortDescriptionError = {};
        const descriptionError = {};

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

        setTitleError(titleError)
        setShortDescriptionError(shortDescriptionError)
        setDescriptionError(descriptionError)
        return isValid;
    }

    const handleSubmitClick = (event) => {
        event.preventDefault();

        const isValid = formRecipesValidation();

        if (!isValid)
            return

        const createRecipes = {
            title: title,
            short_description: shortDescription,
            description: description,
            category: category,
            preparation: preparation,
            people: people
        }

        // const myHeaders = new Headers();
        // myHeaders.append('Content-Type', 'application/json');

        fetch(`${api.root}/recipes/createrecipes`, {
            method: 'POST',
            // headers: myHeaders,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(createRecipes)
        })
            .then(alert(`Recipes is created`))
            .catch(err => alert(err))
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col" >
                        <h3 id="h3Title">My recipes<hr /></h3>
                    </div>
                    <div className="col" align='end'>
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
                <div className="row">
                    <div className="col" xs={4} md={2}>
                        <div className="col">
                            <label>Resipe Image</label>
                        </div>
                        <div className="col">
                            <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" style={{ width: '171px', height: '180px' }} alt=" " />
                        </div>
                        <br />
                        <div className="col">
                            <button variant="outline-secondary" className="btn btn-outline-secondary">UPLOAD IMAGE</button>
                        </div>
                    </div>
                    <div className="col" xs={8} md={6}>
                        <form name="createForm" className='form' onSubmit={handleSubmitClick}>
                            <div className="form-group mb-3">
                                <label>Recipe Title</label>
                                <input className="form-control" type="RecipeTitle" placeholder="Recipe Title" value={title} required
                                    onChange={e => { setTitle(e.target.value) }} />
                                {Object.keys(titleError).map((key) => {
                                    return <div className='text-danger'>{titleError[key]}</div>
                                })}
                            </div>
                            <div className="row mb-6">
                                <div className="form-group col mb-3">
                                    <label>Category</label>
                                    <select className="form-control" defaultValue="Choose..." value={category} required
                                        onChange={e => { setCategory(e.target.value) }}>
                                        <option>Breakfast</option>
                                        <option>Braunch</option>
                                        <option>Lanch</option>
                                        <option>Dinner</option>
                                    </select>
                                </div>
                                <div className="form-group col">
                                    <label>Preparation Time</label>
                                    <input className="form-control" type='number' value={preparation} required
                                        onChange={e => { setPreparation(e.target.value) }} />
                                </div>
                                <div className="form-group col">
                                    <label>No. People</label>
                                    <input className="form-control" type='number' value={people} required
                                        onChange={e => { setPeople(e.target.value) }} />
                                </div>
                            </div>
                            <div className="form-group mb-3" id="exampleFormControlTextarea1">
                                <label>Short Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={shortDescription} required
                                    onChange={e => { setShortDescription(e.target.value) }} />
                                {Object.keys(shortDescriptionError).map((key) => {
                                    return <div className='text-danger'>{shortDescriptionError[key]}</div>
                                })}
                            </div>
                            <button variant="success" className="btn btn-success" onClick={handleSubmitClick}>SAVE</button>
                        </form>
                    </div>
                    <div className="col" xs={6} md={4}>
                        <div className="form-group mb-3" id="exampleFormControlTextarea1">
                            <label>Recipe</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={description} required
                                onChange={e => { setDescription(e.target.value) }}>
                            </textarea>
                            {Object.keys(descriptionError).map((key) => {
                                return <div className='text-danger'>{descriptionError[key]}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
