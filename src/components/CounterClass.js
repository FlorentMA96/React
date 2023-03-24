import React from "react";

export default class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter : 0 }
    }

    decrement = () => {
        this.setState({counter : this.state.counter - 1});
    };

    increment = () => {
        this.setState({counter : this.state.counter + 1});
    };

    componentDidMount() {
        this.setState({ counter : 43 });
    };

    render() {
        return (
            <div>
                <h2 className="inner">
                    <button className="margin-1 btn btn-secondary" type="button" onClick={this.decrement}>-</button>
                    {this.state.counter}
                    <button className="margin-1 btn btn-secondary" type="button" onClick={this.increment}>+</button>
                </h2>
            </div>
        );
    }
}