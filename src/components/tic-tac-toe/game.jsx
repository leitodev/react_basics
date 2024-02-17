import { useState } from 'react';
import TicTacToe from './tic-tac-toe'
import {StyledButton} from '../styled-component/styled-component'
import './styles.scss';

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]); // array [0] => null (9)
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0; // X or O

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        if (nextMove === 0) {
            // reset
            setHistory([Array(9).fill(null)]);
            setCurrentMove(0);
        };

        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <StyledButton onClickFn={() => jumpTo(move)} buttonName={description} />
            </li>
        );
    });


    return (
        <>
        <div id="TicTacToe">
            <div className="game-window">
                <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-history">
                <ul>
                    {moves}
                </ul>
            </div>
        </div>
        </>
    )
}