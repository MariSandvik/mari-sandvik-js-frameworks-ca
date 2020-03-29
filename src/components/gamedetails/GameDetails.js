import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function GameDetails() {
    const [details, setDetails] = useState({});

    const { id } = useParams();
    console.log("id", id);

    const url = BASE_URL + id;

    console.log(url);

    useEffect(function() {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>{details.name}</h2>
        </div>
    );
}

export default GameDetails;