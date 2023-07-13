import React, { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import "./chess.css";
import Navbar from "../navbar/navbar";
import Navigation from "../navigation/navigation";

function ChessGame() {

    const [game, setGame] = useState(new Chess());
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        makeAIMove();
    }, []);

    function makeAIMove() {
        const depth = 3;
        const bestMove = minimaxRoot(depth, game, true).move;

        if (bestMove) {
            const updatedGame = new Chess(game.fen());
            updatedGame.move(bestMove);
            setGame(updatedGame);

            if (updatedGame.game_over()) {
                setIsGameOver(true);
            } else {
                setTimeout(() => {
                    makeAIMove();
                }, 200);
            }
        } else {
            setIsGameOver(true);
        }
    }

    function minimaxRoot(depth, game, isMaximizingPlayer) {
        const newGameMoves = game.moves();
        let bestMove = -Infinity;
        let bestMoveFound = null;

        for (let i = 0; i < newGameMoves.length; i++) {
            const newGameMove = newGameMoves[i];
            game.move(newGameMove);
            const value = minimax(depth - 1, game, -Infinity, Infinity, !isMaximizingPlayer);
            game.undo();

            if (value >= bestMove) {
                bestMove = value;
                bestMoveFound = newGameMove;
            }
        }

        return { move: bestMoveFound };
    }

    function minimax(depth, game, alpha, beta, isMaximizingPlayer) {
        if (depth === 0) {
            return -evaluateBoard(game.board());
        }

        const newGameMoves = game.moves();

        if (isMaximizingPlayer) {
            let bestMove = -Infinity;

            for (let i = 0; i < newGameMoves.length; i++) {
                game.move(newGameMoves[i]);
                bestMove = Math.max(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximizingPlayer));
                game.undo();
                alpha = Math.max(alpha, bestMove);

                if (beta <= alpha) {
                    break;
                }
            }

            return bestMove;
        } else {
            let bestMove = Infinity;

            for (let i = 0; i < newGameMoves.length; i++) {
                game.move(newGameMoves[i]);
                bestMove = Math.min(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximizingPlayer));
                game.undo();
                beta = Math.min(beta, bestMove);

                if (beta <= alpha) {
                    break;
                }
            }

            return bestMove;
        }
    }

    function evaluateBoard(board) {
        let totalEvaluation = 0;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                totalEvaluation += getPieceValue(board[i][j]);
            }
        }

        return totalEvaluation;
    }

    function getPieceValue(piece) {
        if (piece === null) {
            return 0;
        }

        const pieceValueMap = {
            p: -1,
            n: -3,
            b: -3,
            r: -5,
            q: -9,
            k: 0,
            P: 1,
            N: 3,
            B: 3,
            R: 5,
            Q: 9,
            K: 0,
        };

        return pieceValueMap[piece];
    }

    function onDrop({ source, target }) {
        const move = game.move({
            from: source,
            to: target,
            promotion: "q",
        });

        if (move === null) {
            return false;
        }

        return true;
    }

    return (
        <div className="body-chess">
            <Navbar />
            <Navigation />
            <div className="chess-container">
                <Chessboard position={game.fen()} onDrop={onDrop} />
                {isGameOver && <p></p>}
            </div>
        </div>
    );
}

export default ChessGame;