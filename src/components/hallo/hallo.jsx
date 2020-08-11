import React from 'react';
import './hallo.css';

class Hallo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'my friend'
        };
    }

    render() {
        const { message } = this.state;

        return <h1>Hello, {message}!</h1>;
    }
}

export default Hallo;
