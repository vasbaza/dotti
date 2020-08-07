import React from 'react';
import './board.css';
import {getArr} from "../../utils/getarr";

const COLUMNS = 10;
const ROWS = 10;

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: getArr(ROWS, COLUMNS)
        };
    }

    drawPoint = (row, column) => {
        const squares = [...this.state.squares];
        squares[row][column] = !squares[row][column];
        this.setState({squares: squares});
    };

    renderSquare = (row, column) => (
        <div className="square" onClick={() => this.drawPoint(row, column)}>
            {this.state.squares[row][column] && <div className="point"/>}
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
            arrayOfRows.push(<div className="row">{this.renderSquares(row)}</div>);
        }
        return arrayOfRows;
    }

    render() {
        return (
            <div className="board">
                {this.renderRows()}
            </div>
        );
    }
}

export default Board;
