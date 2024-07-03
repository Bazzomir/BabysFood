import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import PropTypes from 'prop-types';
import { api } from '../../RESTApi/RestApi';
import avatar from '../../assets/avatar.png';
import timeIcon from '../../assets/logo/time-recipe.png';
import eye2 from '../../assets/logo/eye2.png';
import plate1 from '../../assets/logo/plate1.png';
import '../../assets/css/popup.css';
import ariaLabelText from "./ariaLabelText";
import RecipeCategoryBadge from "./RecipeCategoryBadge";

function Popup(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const recipe = props.recipe;

    function updateViews() {
        fetch(`${api.root}/recipes/myrecipes/view/${recipe._id}`)
            .then(res => res.json())
            .catch(err => alert(err))
    }

    const handleOpenModal = () => {
        setModalOpen(true);
        updateViews();
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button className="popUpButton" onClick={handleOpenModal} aria-label={ariaLabelText.cardAriaLabel.cardPopUpAriaLabel}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="popUpButtonIcons" viewBox="0 0 512 512">
                    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" />
                </svg>
            </button>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalOpen}
                onHide={handleCloseModal}
                dialogClassName="modal-dialog"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="orangeText">
                        {recipe.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <Card.Img
                                className="img-fluid img-thumbnail responsive-image"
                                variant="top"
                                src={`${api.root}/${recipe.image}`}
                                alt={recipe.title}
                            />
                            <Card.Title className="m-0 py-3 d-flex gap-2 align-items-center" style={{ color: "green" }}>
                                Best Served For
                                <RecipeCategoryBadge category={recipe.category || "Some food.."} className="popUpbadge mr-2" />
                            </Card.Title>
                            <Card.Text className="m-0">
                                {recipe.short_description}
                            </Card.Text>
                        </div>
                        <div className="col-sm-12 col-lg-7">
                            <Card.Body>
                                <Card.Text>
                                    {recipe.description}
                                </Card.Text>
                            </Card.Body>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <div>
                        <img src={timeIcon} className="card-bottom--icons" alt="Icon card:Time" />
                        <span className="icon-text ps-1 pe-2">{recipe.preparation}</span>
                        <img src={plate1} className="card-bottom--icons" alt="Icon card:Plate" />
                        <span className="icon-text ps-1 pe-2">{recipe.people}</span>
                        <img src={eye2} className="card-bottom--icons" alt="Icon card:Favourite" />
                        <span className="icon-text ps-1 pe-2">{recipe.views}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <img src={avatar} className="card-bottom--icons" alt="Avatar" />
                        <span>{recipe.user}</span>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

Popup.propTypes = {
    recipe: PropTypes.object.isRequired
}

export default Popup;
