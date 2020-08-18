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

    // TODO: Менять сетку и очередность здесь
    sendStep = () => {
        const coordinates = this.state.coordinates;
        const squares = deepClone(this.state.squares);
        const player = this.state.player;
        const row = coordinates[0];
        const column = coordinates[1];

        squares[row][column] = player;

        this.setState({squares:squares});

        if (this.state.player === BLUE_PLAYER) {
            this.setState({player: RED_PLAYER});
        } else if (this.state.player === RED_PLAYER) {
            this.setState({player: BLUE_PLAYER});
        }

        this.setState({coordinates: [null, null]});
    }

    // TODO: Запоминать координаты здесь
    rememberCoordinates = (row, column) => {
        this.setState({coordinates: [row, column]})
    }

    // TODO: Отрисовать фактическую сетку
    // renderActualBoard = () => {
    //     const squares = this.state.squares;
    //     const pointBlue = <div className="pointBlue"></div>;
    //     const pointRed = <div className="pointRed"></div>;
    //
    //     alert('it works');
    //
    //     for (let row = 0; row < squares.length; row++) {
    //         for (let column = 0; column < squares[row].length; column++) {
    //             if (squares[row][column] === BLUE_PLAYER) {
    //                 return pointBlue;
    //             } else if (squares[row][column] === RED_PLAYER) {
    //                 return pointRed;
    //             }
    //         }
    //     }
    // }

    // TODO: Изменить состояние квадоатиков и вызвать функцию по запонимнанию координат
    drawPoint = (row, column) => {
        const squares = deepClone(this.state.squares);

        if (squares[row][column] === null) {
            this.rememberCoordinates(row, column);
        }

        // this.rememberCoordinates(row, column);

        // if (this.state.player === BLUE_PLAYER) {
        //     squares[row][column] = BLUE_PLAYER;
        // } else if (this.state.player === RED_PLAYER) {
        //     squares[row][column] = RED_PLAYER;
        // }
        //
        // this.setState({squares: squares})
    }

    renderPoint = (row,column) => {
        const squares = this.state.squares;
        const player = this.state.player;
        const pointBlue = <div className="pointBlue"></div>;
        const pointRed = <div className="pointRed"></div>;
        const coordinates = this.state.coordinates;

        // this.renderActualBoard();

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
