import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        let time = new Date();
        this.state = {
            hour: (time.getHours()<10?'0':'') + time.getHours(),
            min: (time.getMinutes()<10?'0':'') + time.getMinutes(),
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(
        () => this.tick(),
        1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    tick() {
        let time = new Date();
        this.setState ({
            hour: (time.getHours()<10?'0':'') + time.getHours(),
            min: (time.getMinutes()<10?'0':'') + time.getMinutes(),
        });
    }
    render() {
        return (
        <span className="clock">
            {this.state.hour}:{this.state.min}
        </span>
        );
    }
}
export default Clock;