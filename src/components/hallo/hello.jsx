import React from 'react';
import './hello.css';

class Hello extends React.Component {
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

export default Hello;
