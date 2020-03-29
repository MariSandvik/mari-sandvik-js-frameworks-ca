import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/api";

function GameList() {

    const [game, setGame] = useState([]);

    useEffect(function() {
        fetch(BASE_URL)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.dir(result.results);
                setGame(result.results);
            });
    }, []);

    return (
        <div>
            {game.map(function(character) {
                console.log(character);

                const url = "/detail/" + character.id;

                return (
                    <div className="card">
                        <h5>{character.name}</h5>
                        <img src={character.image} alt={character.name} />
                        <a href={url}>View details</a>
                        <p>{character.species}</p>
                        <p>{character.origin.name}</p>
                        <p>Episodes: {character.episode.length}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GameList;