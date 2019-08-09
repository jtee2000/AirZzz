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
                    {/* {this.renderErrors()} */}
                    <div className="email-input">
                        <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update("email")} />
                        <i className="far fa-envelope"></i>
                    </div>
                    <div className="credential-errors">{this.props.errors.join('').includes('Email') ? "Email is required" : undefined}</div>
                    {this.props.formType === "Sign up" && 
                        <>
                        <div className={errors}>
                            <input type="text" placeholder="First Name" value={this.state.fname} onChange={this.update("fname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="credential-errors">{this.props.errors.join('').includes('Fname') ? "First name is required" : undefined}</div>
                        {/* {this.props.errors.join('').includes('Fname') ? errors = "email-input-errors" : undefined} */}
                        <div className="email-input">
                            <input type="text" placeholder="Last Name" value={this.state.lname} onChange={this.update("lname")} />
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="credential-errors">{this.props.errors.join('').includes('Lname') ? "Last name is required" : undefined}</div>
                        </>
                    }
                    <div className="email-input">
                    <input type="password" placeholder="Create Password" value={this.state.password} onChange={this.update("password")} />
                    <i className="fas fa-eye-slash"></i>
                    </div>
                    <div className="credential-errors">{this.props.errors.join('').includes('Password') ? "Password is required" : undefined}</div>
                    <div className="email-input-5">
                    <input className="form-button" type="submit" value={this.props.formType} />
                    </div>
                </form>
            </div>
            
        )
    }
}

export default withRouter(SessionForm);