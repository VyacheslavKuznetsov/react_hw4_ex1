import React from 'react';
import { Button, Typography } from '@material-ui/core';

export default class StateExample extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    reset = () => {
       this.setState({
           count: 0
       });
    }

    render() {
        return (<div>
            <Button variant="contained" color="primary" onClick={this.increment}>increment</Button>
            <Button variant="contained" color="primary" onClick={this.decrement}>decrement</Button>
            <Button variant="contained" color="secondary" onClick={this.reset}>reset</Button>
            <Typography variant="h1">Current: {this.state.count}</Typography>
        </div>);
    }
    
} 