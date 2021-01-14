import React from 'react';
import Header from './Header';


export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleInputchange = this.handleInputchange.bind(this);
    }

    handleInputchange = (event) => {
        var validation = /[$#!_^'%"+=>()</?~&*]/g
        const value = event.target.value;
        const name = event.target.name;
        console.log(name, value)
        if (!value.match(validation)) {
            this.setState({
                [name]: value
            })
        }
    }

    onsubmit = (event) => {
        const { username, password, email } = this.state
        event.preventDefault();
        var body = {
            'username': username,
            'password': password,
            'email': email
        }
        console.log(body)
    }

    render() {
        const { username, password, email } = this.state
        return (
            <div>
                <Header />
                <div className="container">
                    <div style={{ marginTop: '10%' }} className="col-md-4 center-content">
                        <form onSubmit={this.onsubmit} className="form-signin">
                            <h1 style={{ textAlign: 'center' }}>
                                <i class="fa fa-user" aria-hidden="true"></i>

                            </h1>
                            <h1 style={{ textAlign: 'center' }} className="h3 mb-3 font-weight-normal">sign Up</h1>
                            <label style={{ textAlign: 'center' }} >Username</label>
                            <input type="text" name="username" value={username} onChange={this.handleInputchange} className="form-control" placeholder="Username" required autofocus="" />

                            <label  >Email address</label>
                            <input type="email" name="email" value={email} onChange={this.handleInputchange} className="form-control" placeholder="Email address" required />
                            <label  >Password</label>
                            <input type="password" name="password" value={password} onChange={this.handleInputchange} className="form-control" placeholder="Password" required />
                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
        </label>
                            </div>
                            <button className="btn col-md-12 btn-lg bg-dark btn-block" style={{ color: "white" }} type="submit">Sign Up</button>
                        </form>
                        <h6 style={{ textAlign: 'center', paddingTop: 5 }}>
                            <a style={{ color: "black", textAlign: 'center' }} href='/'>Sign In</a>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}