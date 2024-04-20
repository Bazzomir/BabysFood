import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../RESTApi/RestApi';
import defaultImgRecipe from '../../../assets/defaultImgRecipe.jpg';
import ariaLabelText from '../../component/ariaLabelText';
import TitleWithLine from '../../component/TitleWithLine';
import { ButtonAuth } from '../../component/Buttons';

export default function CreateRecipe() {

    const [title, setTitle] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [preparation, setPreparation] = useState("");
    const [people, setPeople] = useState("");
    const [image, setImage] = useState(defaultImgRecipe);

    // const [titleError, setTitleError] = useState("");
    // const [shortDescriptionError, setShortDescriptionError] = useState("");
    // const [descriptionError, setDescriptionError] = useState("");
    // const [categoryError, setCategoryError] = useState("");

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    // const formRecipesValidation = () => {
    //     const titleError = {};
    //     const shortDescriptionError = {};
    //     const descriptionError = {};
    //     const categoryError = {};

    //     let isValid = true;

    //     if (title.trim().length === 0) {
    //         titleError.titleRequired = "Title is required";
    //         isValid = false;
    //     }

    //     if (shortDescription.trim().length === 0) {
    //         shortDescriptionError.shortDescriptionRequired = "Short Description is required";
    //         isValid = false;
    //     }

    //     if (description.trim().length === 0) {
    //         descriptionError.descriptionRequired = "Description is required";
    //         isValid = false;
    //     }

    //     if (category.trim().length === 0) {
    //         categoryError.categoryRequired = "Category is required";
    //         isValid = false;
    //     }

    //     setTitleError(titleError)
    //     setShortDescriptionError(shortDescriptionError)
    //     setDescriptionError(descriptionError)
    //     setCategoryError(categoryError)
    //     return isValid;
    // }

    useEffect(() => {
        const forms = document.querySelectorAll('.needs-validation');

        const handleSubmit = (e) => {
            const form = e.target;

            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }

            form.classList.add('was-validated');
        };

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', handleSubmit);
        });

        return () => {
            Array.from(forms).forEach(form => {
                form.removeEventListener('submit', handleSubmit);
            });
        };
    }, []);

    const handleSubmitClick = (event) => {
        event.preventDefault();

        // const isValid = formRecipesValidation();

        // if (!isValid)
        //     return

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
                alert(`Recipes is created`);
                window.location = "/myrecipes"
            })
            .catch(err => alert(err))
    }

    return (
        <div className="container">
            <div className="row pt-5 pb-6 xxx">
                <div className="row">
                    {/* <div className='row'>
                        <div className="col" >
                            <h2 className="title">Create recipes<hr className="mt-2 titleLine" /></h2>
                        </div>
                    </div> */}
                    <TitleWithLine title="Create Recipes" className="titleLine" />
                    <div className="col d-flex justify-content-end aling-items-center yyy">
                        <Link to="/myrecipes">
                            <button type="button" className="btn btn-outline-light" id="plusAndBack" aria-label={ariaLabelText.createMyRecipeAriaLabel.backToCreateRecipeBtnAriaLabel}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="plusAndBackIcon">
                                    <path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z" />
                                </svg>
                            </button>
                        </Link>
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
                            <button onClick={() => document.getElementById("fileinput").click()} type="submit" className="btn btn-grey" aria-label={ariaLabelText.createMyRecipeAriaLabel.uploadRecipeImageBtnAriaLabel}>UPLOAD IMAGE</button>
                            <input id="fileinput" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="col-9">
                        <form name="createRecipeForm" className="needs-validation row" noValidate onSubmit={handleSubmitClick}>
                            <div className="col-7">
                                <div className="row">
                                    <div className="form-group col-12 mb-3">
                                        <label htmlFor="recipeTitle">Recipe Title</label>
                                        <input className="form-control" id="recipeTitle" type="text" placeholder="Recipe Title" value={title} required
                                            onChange={e => { setTitle(e.target.value) }} />
                                        {/* {Object.keys(titleError).map((key) => {
                                            return <div className='text-danger'>{titleError[key]}</div>
                                        })} */}
                                        <div className="invalid-feedback">
                                            Please enter recipe title.
                                        </div>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipeCategory">Category</label>
                                        <select className="form-select" id="recipeCategory" value={category} required
                                            onChange={e => { setCategory(e.target.value) }}>
                                            <option value="" disabled selected id="none">Choose...</option>
                                            <option value="Breakfast" id="Breakfast" >Breakfast</option>
                                            <option value="Brunch" id="Brunch" >Brunch</option>
                                            <option value="Lunch" id="Lunch" >Lunch</option>
                                            <option value="Dinner" id="Dinner" >Dinner</option>
                                        </select>
                                        {/* {Object.keys(categoryError).map((key) => {
                                            return <div className='text-danger'>{categoryError[key]}</div>
                                        })} */}
                                        <div className="invalid-feedback">
                                            Please choose recipe category.
                                        </div>
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipePreparationTime" >Preparation Time</label>
                                        <input className="form-control" id="recipePreparationTime" type="number" value={preparation}
                                            onChange={e => { setPreparation(e.target.value) }} />
                                    </div>
                                    <div className="form-group col-4">
                                        <label htmlFor="recipeNumPeople">No. People</label>
                                        <input className="form-control" id="recipeNumPeople" type="number" value={people}
                                            onChange={e => { setPeople(e.target.value) }} />
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <label htmlFor="recipeShortDes" >Short Description</label>
                                    <textarea className="form-control" id="recipeShortDes" rows="3" value={shortDescription} required
                                        onChange={e => { setShortDescription(e.target.value) }} />
                                    {/* {Object.keys(shortDescriptionError).map((key) => {
                                        return <div className='text-danger'>{shortDescriptionError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter recipe short description.
                                    </div>
                                </div>
                            </div>
                            <div className="col md-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="recipeDes" >Recipe</label>
                                    <textarea className="form-control" id="recipeDes" rows="10" value={description} required
                                        onChange={e => { setDescription(e.target.value) }} />
                                    {/* {Object.keys(descriptionError).map((key) => {
                                        return <div className='text-danger'>{descriptionError[key]}</div>
                                    })} */}
                                    <div className="invalid-feedback">
                                        Please enter full recipe.
                                    </div>
                                </div>
                            </div>
                            {/* <div className="pt-3">
                                <button variant="success" className="btn btn-green col-2" aria-label={ariaLabelText.createMyRecipeAriaLabel.saveRecipeAriaLabel}
                                //  onClick={handleSubmitClick}
                                >SAVE</button>
                            </div> */}
                            {/* <div className="row px-0">
                                <div className="col px-0 mt-4 d-flex justify-content-end" >
                                    <button variant="success" className="btn btn-green col-2" aria-label={ariaLabelText.createMyRecipeAriaLabel.saveRecipeAriaLabel}
                                    //  onClick={handleSubmitClick}
                                    >SAVE</button>
                                </div>
                            </div> */}
                            <ButtonAuth classNameDiv="col-12 mt-4 text-end" classNameBtn="btn-green text-uppercase col-md-2" buttonName="Save" ariaLabel={ariaLabelText.createMyRecipeAriaLabel.saveRecipeAriaLabel} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
