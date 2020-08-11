import React from 'react';
import './board.css';
import {getArr} from "../../utils/get-arr";
import {deepClone} from "../../utils/deep-clone";

const COLUMNS = 10;
const ROWS = 10;

const BLUE_PLAYER = 'blue';
const RED_PLAYER = 'red';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: getArr(ROWS, COLUMNS),
            coordinates: [null, null]
        };
    }

    sendStep = () => {

    }

    drawPoint = (row, column) => {
        const squares = deepClone(this.state.squares);
        squares[row][column] = !squares[row][column];
        this.setState({squares: squares});
    };

    renderSquare = (row, column) => (
        <div className="square" key={column} onClick={() => this.drawPoint(row, column)}>
            {this.state.squares[row][column] && <div className="pointBlue"/>}
        </div>
    );

    renderSquares = row => {
        const arrayOfSquares = [];
        for (let column = 0; column < COLUMNS; column++) {
            arrayOfSquares.push(this.renderSquare(row, column));
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
                <button className="sendStep" onClick={this.sendStep()}>Отправить ход!</button>
            </div>
        );
    }
}

export default Board;
