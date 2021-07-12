import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleTimeString() };
    } 

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000);
        this.props.fetchUsers();
    };

    render() {
        return (
            <div>
                the time is: { this.state.time }
                HELLOOOOO
            </div>
        );
    };
};

export default Splash;