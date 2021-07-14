import React from 'react';
import SignUpForm from '../users/create_user_container';
import Logout_container from '../logout/logout_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    } 

    componentDidMount() {
        this.props.fetchUsers();
    };

    display() {
        if (localStorage.userId || this.props.state.session.id && this.props.state.users.length) {
            return <Logout_container />
        } else {
            return <SignUpForm/>
        }
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        );
    };
};

export default Splash;