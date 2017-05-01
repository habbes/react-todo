import React from 'react';

export default class Input extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleValue = this.handleValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleValue (e) {
        this.setState({
            value: e.target.value
        });
    }

    handleClick (e) {
        this.props.onAdd(this.state.value);
        this.setState({value: ''});
    }

    render () {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleValue} />
                <button onClick={this.handleClick}>Add Todo</button>
            </div>
        );
    }
}