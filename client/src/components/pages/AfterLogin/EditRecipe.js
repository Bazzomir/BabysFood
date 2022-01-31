import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
    const [image, setImage] = useState(null);

    function handleImage(e) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
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
                setTitle(data.recipe.title)
                setShortDescription(data.recipe.short_description)
                setDescription(data.recipe.description)
                setCategory(data.recipe.category)
                setPreparation(data.recipe.preparation)
                setPeople(data.recipe.people)

                if (data.recipe.image !== undefined) {
                    setImage(`${api.root}/${data.recipe.image}`)
                } else
                    setImage("https://w7.pngwing.com/pngs/692/99/png-transparent-hamburger-street-food-seafood-fast-food-delicious-food-salmon-with-vegetables-salad-in-plate-leaf-vegetable-food-recipe-thumbnail.png")

            })
    }

    useEffect(() => {
        getMyRecipe();
    }, []);

    const openFileInput = (event) => {
        event.preventDefault();
        event.stopPropagation();

        document.getElementById("fileinput1").click()
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
                // 'Content-Type': 'application/json',
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
        // <div className="container">
        //     <div className="row">
        //         <h3 id="h3Title">My Recipes<hr className='mt-2' /></h3>
        //     </div>
        //     <div className="row" style={{ marginTop: "5%" }}>
        //         <div className="col">
        //             <form name="createForm" className='form' style={{ width: "80%" }} >
        //                 <div className="row mt-5">
        //                     <div className="col" xs={4} md={2}>
        //                         <div className="col">
        //                             <label>Recipe Image</label>
        //                         </div>
        //                         <div className="col">
        //                             <img style={{ width: '171px', height: '180px' }} alt=" " src={image} />
        //                         </div>
        //                         <br />
        //                         <div className="col">
        //                             <button variant="outline-secondary" onClick={openFileInput} type="submit" className="btn btn-outline-secondary">UPLOAD IMAGE</button>
        //                             <input id="fileinput1" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
        //                         </div>
        //                     </div>
        //                     <div className="col">
        //                         <label>Recipe Title</label>
        //                         <input className="form-control" onChange={(e) => setTitle(e.target.value)} defaultValue={title} type="text" />
        //                     </div>
        //                     <div className="col">
        //                         <label>Category
        //                             <select className="form-control" onChange={(e) => setCategory(e.target.value)} defaultValue={category} aria-label="Default select example">
        //                                 <option value="Breakfast">Breakfast</option>
        //                                 <option value="Brunch">Brunch</option>
        //                                 <option value="Lunch">Lunch</option>
        //                                 <option value="Dinner">Dinner</option>
        //                             </select>
        //                         </label>
        //                     </div>
        //                 </div>
        //                 <div className="row mb-3">
        //                     <div className="col">
        //                         <label>Preparation Time</label>
        //                         <input className="form-control" onChange={(e) => setPreparation(e.target.value)} defaultValue={preparation} type="number" />
        //                     </div>
        //                     <div className="col">
        //                         <label>No. People</label>
        //                         <input className="form-control" onChange={(e) => setPeople(e.target.value)} defaultValue={people} type="number" />
        //                     </div>
        //                 </div>
        //                 <div className="row mb-4">
        //                     <div className="col">
        //                         <label>Short Description</label>
        //                         <textarea className="form-control" onChange={(e) => setShortDescription(e.target.value)} defaultValue={shortDescription} type="text" />
        //                     </div>
        //                     <div className="col md-4">
        //                         <label>Recipe</label>
        //                         <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} defaultValue={description} type="text" />
        //                     </div>
        //                 </div>
        //                 <div className="row">
        //                     <button variant="success" className="btn btn-success col-2" onClick={editRecipe} >Save</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col" >
                    <h3 id="h3Title" className="mb-2">Edit recipes</h3><hr className='col-sm-12 mb-4' />
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
                        <button variant="outline-secondary" onClick={openFileInput} type="submit" className="btn btn-outline-secondary">UPLOAD IMAGE</button>
                        <input id="fileinput1" onChange={handleImage} type="file" accept="image/*" style={{ display: "none" }} />
                    </div >
                </div>
                <div className="col-9" xs={8} md={6}>
                    <form name="createForm" className='form row' >
                        <div className="col-7">
                            <div className="row">
                                <div className="form-group col-12 mb-3">
                                    <label>Recipe Title</label>
                                    <input className="form-control" type="RecipeTitle" placeholder="Recipe Title" value={title} required
                                        onChange={e => { setTitle(e.target.value) }} />
                                </div>
                                <div className="form-group col-4">
                                    <label style={{ width: "100%" }}>Category
                                        <select className="form-control" placeholder="Choose..." value={category || "none"} required
                                            onChange={e => { setCategory(e.target.value) }}>
                                            <option value="none" disabled selected>Select ..</option>
                                            <option>Breakfast</option>
                                            <option>Brunch</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                        </select>
                                    </label>
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
                            </div>
                        </div>
                        <div className="col md-4" xs={6}>
                            <div className="form-group mb-3" id="exampleFormControlTextarea1">
                                <label>Recipe</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={description} required
                                    onChange={e => { setDescription(e.target.value) }} />
                            </div>
                        </div>
                        <div className="row">
                            <button variant="success" className="btn btn-success col-1" onClick={editRecipe}>SAVE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}