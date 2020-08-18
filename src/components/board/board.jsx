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
            cells: getArr(ROWS, COLUMNS),
            player: BLUE_PLAYER,
            cellCoordinates: [null, null]
        };
    }

    sendStep = () => {
        const currentCellCoordinates = this.state.cellCoordinates;
        const currentCellRowCoordinate = currentCellCoordinates[0];
        const currentCellColumnCoordinate = currentCellCoordinates[1];

        if (currentCellRowCoordinate === null || currentCellColumnCoordinate === null) {
            alert("Вы не сделали ход!");
            return;
        }

        const cells = deepClone(this.state.cells);
        const currentPlayer = this.state.player;
        const boardState = {};

        cells[currentCellRowCoordinate][currentCellColumnCoordinate] = currentPlayer;

        if (currentPlayer === BLUE_PLAYER) {
            boardState.player = RED_PLAYER;
        } else if (currentPlayer === RED_PLAYER) {
            boardState.player = BLUE_PLAYER;
        }

        boardState.cells = cells;
        boardState.cellCoordinates = [null, null];

        this.setState(boardState);
    }

    rememberCellCoordinates = (currentCellRowCoordinate, currentCellColumnCoordinate) => {
        const cells = deepClone(this.state.cells);

        if (cells[currentCellRowCoordinate][currentCellColumnCoordinate] === null) {
            this.setState({cellCoordinates: [currentCellRowCoordinate, currentCellColumnCoordinate]});
        }
    }

    renderPoint = (currentCellRowCoordinate, currentCellColumnCoordinate) => {
        const cells = this.state.cells;
        const currentPlayer = this.state.player;
        const currentCellCoordinates = this.state.cellCoordinates;
        const pointBlue = <div className="pointBlue"/>;
        const pointRed = <div className="pointRed"/>;

        if (currentCellCoordinates[0] === currentCellRowCoordinate && currentCellCoordinates[1] === currentCellColumnCoordinate) {
            if (currentPlayer === BLUE_PLAYER) {
                return pointBlue;
            } else if (currentPlayer === RED_PLAYER) {
                return pointRed;
            }
        }

        if (cells[currentCellRowCoordinate][currentCellColumnCoordinate] === BLUE_PLAYER) {
            return pointBlue;
        } else if (cells[currentCellRowCoordinate][currentCellColumnCoordinate] === RED_PLAYER) {
            return pointRed;
        }
    }

    renderCells = currentCellRowCoordinate => {
        const arrayOfCells = [];

        for (let currentCellColumnCoordinate = 0; currentCellColumnCoordinate < COLUMNS; currentCellColumnCoordinate++) {
            arrayOfCells.push(<div className="square" key={currentCellColumnCoordinate}
                                   onClick={() => (this.rememberCellCoordinates(currentCellRowCoordinate, currentCellColumnCoordinate))}>{this.renderPoint(currentCellRowCoordinate, currentCellColumnCoordinate)}</div>);
        }
        return arrayOfCells;
    }

    renderBoardRows = () => {
        let arrayOfBoardRows = []
        for (let currentCellRowCoordinate = 0; currentCellRowCoordinate < ROWS; currentCellRowCoordinate++) {
            arrayOfBoardRows.push(<div className="row"
                                       key={currentCellRowCoordinate}>{this.renderCells(currentCellRowCoordinate)}</div>);
        }
        return arrayOfBoardRows;
    }

    render() {
        return (
            <div className="game">
                <div className="board">
                    {this.renderBoardRows()}
                </div>
                <button className="sendStep" onClick={() => this.sendStep()}>Отправить ход!</button>
            </div>
        );
    }
}

export default Board;
