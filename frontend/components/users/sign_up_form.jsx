import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
        this.passwordIsGood = false; 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.verifyPassword();
        if (this.passwordIsGood) {
            console.log(this.state);
            this.props.signup({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
        }
    }

    update(field) {
        return e => this.setState( {[field]: e.currentTarget.value} );
    }

    samePassword() {
        if (this.state.password === this.state.password2) {
            this.passwordIsGood = true;
        } else {
            this.passwordIsGood = false; 
        }
    }
    


    verifyPassword() {
        e => this.setState( { password2: e.currentTarget.value} );
        this.samePassword();
    }
    
    render() {
        return (
            <div className="sign-up">
                <p>Sign Up</p>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <p>Name:</p>
                        <input 
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                        />
                    </div>
                    <div className="row">
                        <p>Email</p>
                        <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </div>
                    <div className="row">
                        <p>Password</p>
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </div>
                    <div className="row">
                       <p>Confirm Password</p>
                       <input 
                            type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                        />
                    </div>
                    <button type="submit" className="button">Create User</button>
                </form>
            </div>
        )
    }

}

export default SignUpForm;
