import React from 'react';

export default class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            err: ''
        }
        this.handleInputchange = this.handleInputchange.bind(this);
        this.onsubmit = this.onsubmit.bind(this)
    }

    handleInputchange = (event) => {
        var validation = /[$#!_^%@%"+.=>()</?~&*]/g
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
        const { username, password } = this.state
        event.preventDefault();
        console.log(username, password)
        if (username === 'deepak' & password === 'deepak123') {
            localStorage.setItem('user_login', JSON.stringify({ 'login': true, }))
            window.location.reload();
        } else {
            this.setState({ err: '**Invalid Username/Password' })
        }

    }

    render() {
        const { username, password, err } = this.state
        return (
            <div className="container">
                <div style={{ marginTop: '10%', alignContent: 'center' }} className="col-md-4 center-content">
                    <form onSubmit={this.onsubmit} className="form-signin">
                        <p style={{ color: 'red', textAlign: "center" }}>{err}</p>
                        <h1 style={{ textAlign: 'center' }}>
                            <i className="fa fa-sign-in" aria-hidden="true"></i>
                        </h1>
                        <h1 style={{ textAlign: 'center' }} className="h3 mb-3 font-weight-normal">Please sign in</h1>

                        <label  >Username</label>
                        <input type="text" name="username" value={username} onChange={this.handleInputchange} id="inputEmail" className="form-control" placeholder="Username" required />

                        <label >Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleInputchange} id="inputPassword" className="form-control" placeholder="Password" required="" />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                        </div>

                        <button type="submit" style={{ color: "white" }} className="btn btn-lg col-md-12 bg-dark btn-block" type="submit">Sign in</button>
                    </form>
                    <h6 style={{ textAlign: 'center', paddingTop: 5 }}>
                        <a style={{ color: "black", textAlign: 'center' }} href='/signup'>Sign Up</a>
                    </h6>
                </div>
            </div>
        )
    }
}