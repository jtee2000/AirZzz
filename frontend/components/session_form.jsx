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
        this.props.processForm(user);

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
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <label>email
                        <input type="text" value={this.state.email} onChange={this.update("email")} />
                    </label>
                    {this.props.formType === "signup" && 
                        <>
                            <label>First name
                                <input type="text" value={this.state.fname} onChange={this.update("fname")} />
                            </label>
                            <label>Last name
                                <input type="text" value={this.state.lname} onChange={this.update("lname")} />
                            </label>
                        </>
                    }
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);