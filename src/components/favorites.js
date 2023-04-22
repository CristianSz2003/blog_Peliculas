import React, {useState, useEffect} from "react";
import {addToFirebase} from "../helpers/firebaseHelpers";

const addFavorite = async (name, description) => {
    addToFirebase({objectToSave: {name, description}}, "favoritos")
}

const FavoriteView = () => {
    return (
        <div>
            <h2 className="text-center">Mis Favoritos</h2>
        </div>
    )
}
export default FavoriteView;