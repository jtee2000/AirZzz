import React from 'react';
import { withRouter } from 'react-router-dom'
import { fileURLToPath } from 'url';

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
        this.emailBlank = false; 
        this.fnameBlank = false; 
        this.lnameBlank = false; 
        this.passwordBlank = false; 
        this.passwordLength = false; 
        this.emailInvalid = false; 
    }

    validEmail(email) {
        if (!email.includes("@")) return false; 
        if(!email.includes(".")) return false; 
        const verify = email.split(".");
        const verify2 = email.split("@");
        if (verify[1].length <= 0) return false; 
        if (verify2[0] === "") return false; 
        return true; 
    }

    handleSubmit(e) {
        e.preventDefault();
        for (let i = 0; i < Object.keys(this.state).length; i++) {
            const field = Object.keys(this.state)[i];
            if (this.state[field] === "") {
                this.renderBlankErrors(field);
            }
            else if (field === "password" && this.state[field].length < 8) {
                this.renderBlankErrors("passwordLength");
            } else if (field === "email" && !this.validEmail(this.state[field])) {
                this.renderBlankErrors("emailInvalid");
            }
        }
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal).then(() => {
            return (
                this.props.history.push("/listings")
            )
        })
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    componentWillMount() {
        this.props.clearErrors();
    }

    authorizationErrors() {
        return (
            <div className="auth-errors">
                <div className="warning-icon">
                    <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="auth-errors-text">
                    <span>
                        The password you entered is incorrect. Try again, or choose another login option. 
                    </span>
                </div>
            </div>
        )
    }

    authorizationEmailErrors() {
        return (
            <div className="auth-errors">
                <div className="warning-icon">
                    <i className="fas fa-exclamation-triangle"></i>
                </div>
                <div className="auth-errors-text">
                    <span>
                        The email you entered is already associated with an account. Try again, or login instead. 
                    </span>
                </div>
            </div>
        )
    }

    renderBlankErrors(input) {
        switch(input) {
            case "fname": 
                this.fnameBlank = true; 
                break;
            case "email": 
                this.emailBlank = true; 
                break;
            case "lname": 
                this.lnameBlank = true; 
                break;
            case "password": 
                this.passwordBlank = true; 
                break;
            case "passwordLength": 
                this.passwordLength = true; 
                break;
            case "emailInvalid": 
                this.emailInvalid = true; 
                break; 
        }
    }


    render() {
        const errors = "email-input";
        return (
            <div className="form">
                {/* <i className="fas fa-times" onClick={this.props.closeModal}></i> */}
                <div className="x-out">
                    <img className="x" onClick={this.props.closeModal} src={x_img} alt=""/>
                </div>
                <div className="login-text">
                    <span>{this.props.formType} with </span><span className="link-highlight">Facebook </span><span>or </span><span className="link-highlight">Google</span>
                </div>
                <div className="form-border">
                    <span className="span-is-annoying"></span>
                        or
                    <span className="hella-annoying"></span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <br/>
                    {this.props.errors.includes("Invalid username/password") && this.passwordBlank === false && this.emailBlank === false && this.validEmail(this.state.email) ? this.authorizationErrors() : undefined}
                    {this.props.errors.includes("Email has already been taken") ? this.authorizationEmailErrors() : undefined}
                    <div className={`email-input ${(this.emailBlank && this.state.email.length === 0) || (this.emailInvalid && !this.validEmail(this.state.email))? "border-error" : "a"}`}>
                        <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="credential-errors"> {this.emailBlank && this.state.email.length === 0 ? "Email is required." : undefined}</div>
                    <div className="credential-errors"> {!this.validEmail(this.state.email) && this.emailInvalid ? "Enter a valid email." : undefined}</div>
                    <br/>
                    {this.props.formType === "Sign up" && 
                        <>
                        <div className={`email-input ${this.fnameBlank && this.state.fname.length === 0 ? "border-error" : "a"}`}>
                            <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.update("fname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="credential-errors">{this.fnameBlank && this.state.fname.length === 0? "First name is required." : undefined}</div>
                        <br/>
                        <div className={`email-input ${this.lnameBlank && this.state.lname.length === 0 ? "border-error" : "a"}`}>
                            <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.update("lname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="credential-errors">{this.lnameBlank && this.state.lname.length === 0 ? "Last name is required." : undefined}</div>
                        <br/>
                        </>
                    }
                    <div className={`email-input ${(this.passwordBlank && this.state.password.length === 0) || (this.passwordLength && this.state.password.length < 8)? "border-error" : "a"}`}>
                        <input type="password" placeholder="Create Password" value={this.state.password} onChange={this.update("password")} />
                        <i className="fas fa-eye-slash"></i>
                    </div>
                    <div className="credential-errors">{this.passwordBlank && this.state.password.length === 0 ? "Password is required." : undefined}</div>
                    <div className="credential-errors">{this.passwordLength && this.state.password.length < 8 ? "Your password must be at least 8 characters. Please try again." : undefined}</div>
                    {/* <br/> */}
                    <div className="email-input-5">
                    <input className="form-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default withRouter(SessionForm);