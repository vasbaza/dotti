import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hallo from './components/hallo/hallo';
import Board from './components/board/board';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root'),
// );

ReactDOM.render(
    <React.StrictMode>
        <Hallo />
        <Board />
    </React.StrictMode>,
    document.getElementById('root'),
);
