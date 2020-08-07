import React from 'react';
import './board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawPoint: false,
            squares: Array(3).fill(null)
        };
    }

    drawPoint = () => {
        this.setState({
            drawPoint: !this.state.drawPoint
        });
    };

    renderSquare = i => {
        const { drawPoint } = this.state;

        return (
            <div role="button" className="square" onClick={() => this.drawPoint()}>
                {drawPoint && <div className="point" />}
            </div>
        );
    };

    render() {
        return (
            <div className="board">
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
            </div>
        );
    }
}

export default Board;
