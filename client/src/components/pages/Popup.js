import React from "react";
import { Card, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import { api } from '../../RESTApi/RestApi';

export function Popup(props) {

    const recipe = props.recipe

    function PopUpFunction(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{
                    backdropFilter: "blur(5px)"
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="colorText">
                        {recipe.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-4">
                            <Card.Img style={{ borderTopLeftRadius: "2%", borderTopRightRadius: "2%" }} variant="top" src={`${api.root}/${recipe.image}`}/> 
                            <Card.Title className="mt-3" style={{color:"green"}}>Best Served For  <span style={{ backgroundColor: "green", borderRadius: "20%/50%", padding: "1%", color: "white", opacity: "0.8", paddingLeft: "2%", paddingRight: "2%", paddingBottom: "1.5%" }}>{recipe.category.toLowerCase()}</span></Card.Title>
                            <Card.Text>
                                {recipe.short_description}
                            </Card.Text>
                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg><span className="recipeIcons">{recipe.preparation}</span>
                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg><span className="recipeIcons">{recipe.people}</span>
                            <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg><span className="recipeIcons">{recipe.views}</span>
                        </div>
                        <div className="col-6">
                            <Card.Body >
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    function updateViews() {
        fetch(`${api.root}/recipes/myrecipes/view/${recipe._id}`)
            .then(res => res.json())
            .catch(err => alert(err))
    }

    const [popupShow, setPopUpShow] = React.useState(false);

    return (
        <>
            <button id='iconsButton' onClick={() => { setPopUpShow(true); updateViews() }}>
                <svg id="icons" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>
            <PopUpFunction
                show={popupShow}
                onHide={() => setPopUpShow(false)}
            />
        </>
    );
}

Popup.propTypes = {
    recipe: PropTypes.object.isRequired
}