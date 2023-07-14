import React, { useState, useEffect } from 'react';
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import "./chess.css";
import Navbar from "../navbar/navbar";
import Navigation from "../navigation/navigation";

function ChessGame() {

    const [game, setGame] = useState(new Chess());

    useEffect(() => {
        if (game.turn() === 'b') {
            const updatedGame = new Chess(game.fen()); // Crear una nueva instancia de Chess basada en el estado actual
            setGame(updatedGame);
        }
    }, [game]);

    const handleMove = (move) => {
        const { from, to } = move;
        const validMove = game.move({ from, to, promotion: 'q' });

        if (validMove === null) {
            return;
        }

        setGame(game);
    };

    return (
        <div className="body-chess">
            <Navbar />
            <Navigation />
            <div className="chess-container">
                <Chessboard position={game.fen()} onDrop={(move) => handleMove(move)} />
            </div>
        </div>
    );
}

export default ChessGame;