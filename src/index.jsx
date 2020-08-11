import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/hallo/hello';
import Board from './components/board/board';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root'),
// );

ReactDOM.render(
    <React.StrictMode>
        <Hello />
        <Board />
    </React.StrictMode>,
    document.getElementById('root'),
);
