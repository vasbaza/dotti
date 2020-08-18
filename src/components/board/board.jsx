import React from 'react';
import './board.css';
import {getArr} from "../../utils/get-arr";
import {deepClone} from "../../utils/deep-clone";

const COLUMNS = 12;
const ROWS = 12;

const BLUE_PLAYER = 'blue';
const RED_PLAYER = 'red';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: getArr(ROWS, COLUMNS),
            player: BLUE_PLAYER,
            coordinates: [null, null]
        };
    }

    sendStep = () => {
        const coordinates = this.state.coordinates;
        const row = coordinates[0];
        const column = coordinates[1];

        if (row === null || column === null) {
            alert("Вы не сделали ход!");
            return;
        }

        const squares = deepClone(this.state.squares);
        const player = this.state.player;
        const state = {};

        squares[row][column] = player;

        if (player === BLUE_PLAYER) {
            state.player = RED_PLAYER;
        } else if (player === RED_PLAYER) {
            state.player = BLUE_PLAYER;
        }

        state.squares = squares;
        state.coordinates = [null, null];

        this.setState(state);
    }

    rememberCoordinates = (row, column) => {
        this.setState({coordinates: [row, column]})
    }

    drawPoint = (row, column) => {
        const squares = deepClone(this.state.squares);

        if (squares[row][column] === null) {
            this.rememberCoordinates(row, column);
        }
    }

    renderPoint = (row,column) => {
        const squares = this.state.squares;
        const player = this.state.player;
        const coordinates = this.state.coordinates;
        const pointBlue = <div className="pointBlue"/>;
        const pointRed = <div className="pointRed"/>;

        if (coordinates[0] === row && coordinates[1] === column) {
            if (player === BLUE_PLAYER) {
                return pointBlue;
            } else if (player === RED_PLAYER) {
                return pointRed;
            }
        }

        if (squares[row][column] === BLUE_PLAYER) {
            return pointBlue;
        } else if (squares[row][column] === RED_PLAYER) {
            return pointRed;
        }
    }

    renderSquares = row => {
        const arrayOfSquares = [];

        for (let column = 0; column < COLUMNS; column++) {
            arrayOfSquares.push(<div className="square" key={column} onClick={() => (this.drawPoint(row, column))}>{this.renderPoint(row,column)}</div>);
        }
        return arrayOfSquares;
    }

    renderRows = () => {
        let arrayOfRows = []
        for (let row = 0; row < ROWS; row++) {
            arrayOfRows.push(<div className="row" key={row}>{this.renderSquares(row)}</div>);
        }
        return arrayOfRows;
    }

    render() {
        return (
            <div className="game">
                <div className="board">
                    {this.renderRows()}
                </div>
                <button className="sendStep" onClick={() => this.sendStep()}>Отправить ход!</button>
            </div>
        );
    }
}

export default Board;
