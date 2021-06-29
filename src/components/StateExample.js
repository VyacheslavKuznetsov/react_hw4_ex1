import React from 'react';

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
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.reset}>reset</button>
            <h1>Current: {this.state.count}</h1>
        </div>);
    }
    
} 