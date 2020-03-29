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
            {games.map(function(game) {
                console.log(game);

                const url = "/detail/" + game.id;

                return (
                    <div className="card">
                        <h5>{game.name}</h5>
                        <img src={game.image} alt={game.name} />
                        <a href={url}>View details</a>
                        <p>{game.rating}</p>
                        <p>{game.realeased}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default GameList;