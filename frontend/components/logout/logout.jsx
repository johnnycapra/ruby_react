import React from 'react';
import SignUpForm from '../users/create_user_container';

class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
    }
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    display() {
        if(this.props.state.session.id) {
            return (
                <div className="row">
                    <button onClick={this.props.logout}>LOGOUT</button>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <SignUpForm />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.display()}
            </div>
        )
    }
}
export default LogoutButton;