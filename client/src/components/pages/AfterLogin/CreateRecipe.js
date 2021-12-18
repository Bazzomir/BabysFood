import React from 'react';
import { Link } from 'react-router-dom';
import NavbarAfterLogin from '../../Header/NavbarAfterLogin';

export default function CreateRecipe() {
    return (
        <div>
            <NavbarAfterLogin />
            <div className="container">
                <div className="row">
                    <div className="col" >
                        <h3 id="h3Title">My recipes<hr /></h3>
                    </div>
                    <div className="col" align='end'>
                        <Link to="/myrecipes">
                            <button type="button" className="btn btn-outline-light" id="plusAndBack">
                                <svg xmlns="http://www.w3.org/2000/svg" id="icons" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
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
                            <image src="https://www.pinclipart.com/picdir/big/133-1331433_free-user-avatar-icons-happy-flat-design-png.png" roundedCircle style={{ width: '171px' }, { height: '180px' }} alt=" " />
                        </div>
                        <br />
                        <div className="col">
                            <button variant="outline-secondary" className="btn btn-outline-secondary">UPLOAD IMAGE</button>
                        </div>
                    </div>
                    <div className="col" xs={8} md={6}>
                        <form>
                            <div className="form-group mb-3" controlId="formBasicEmail">
                                <label>Recipe Title</label>
                                <input className="form-control" type="RecipeTitle" placeholder="Recipe Title" />
                            </div>
                            <div className="row mb-6">
                                <div className="form-group col mb-3" controlId="formGridState">
                                    <label>Category</label>
                                    <select class="form-control" id="exampleFormControlSelect1" defaultValue="Choose...">
                                        <option>Breakfast</option>
                                        <option>Braunch</option>
                                        <option>Lanch</option>
                                        <option>Dinner</option>
                                    </select>
                                </div>
                                <div className="form-group col" controlId="formGridCity">
                                    <label>Preparation Time</label>
                                    <input className="form-control" />
                                </div>
                                <div className="form-group col" controlId="formGridZip">
                                    <label>No. People</label>
                                    <input className="form-control" />
                                </div>
                            </div>
                            <div className="form-group mb-3" id="exampleFormControlTextarea1">
                                <label>Short Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" />
                            </div>
                            <button variant="success" className="btn btn-success">SAVE</button>
                        </form>
                    </div>
                    <div className="col" xs={6} md={4}>
                        <div className="form-group mb-3" id="exampleFormControlTextarea1">
                            <label>Recipe</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
