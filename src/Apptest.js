import React, { Component } from 'react';

class Apptest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "said"
        }
    }

    render() {
        return (

            <
            div > New component content. { this.state.name } < /div>
        );
    }
}

export default Apptest;