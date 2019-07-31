import React from 'react';
import { withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "", 
            lname: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="form">
                <div className="login-text">
                    <span>{this.props.formType} with </span><span className="link-highlight">Facebook </span><span>or </span><span className="link-highlight">Google</span>
                </div>
                <div className="form-border">
                    <span></span>
                        or
                    <span></span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <div className="email-input">
                        <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                        <i className="far fa-envelope"></i>
                    </div>
                    {this.props.formType === "Sign up" && 
                        <>
                        <div className="email-input">
                            <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.update("fname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="email-input">
                            <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.update("lname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        </>
                    }
                    <div className="email-input">
                    <input type="password" placeholder="Create Password" value={this.state.password} onChange={this.update("password")} />
                    <i className="fas fa-eye-slash"></i>
                    </div>
                    <div className="email-input">
                    <input className="form-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default withRouter(SessionForm);