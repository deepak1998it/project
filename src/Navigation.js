import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Signin from './SignIn';
import SignUp from './Signup'
import MovieList from './movie_list'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }
    componentDidMount() {
        var data = localStorage.getItem('user_login')
        if (data) {
            this.setState({ login: true })
        }
    }
    render() {
        return (
            <Router>
                <Switch>
                    {!this.state.login ?
                        <div>
                            <Route exact path='/' component={Home}></Route>
                            <Route exact path='/signin' component={Signin}></Route>
                            <Route exact path='/signup' component={SignUp}></Route>
                        </div> :
                        <Route exact path='/' component={MovieList}></Route>
                    }
                </Switch>
            </Router>


        );
    }
}

export default Navigation;
