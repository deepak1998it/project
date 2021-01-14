import React from 'react';
import Signin from './SignIn'
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Signin />
            </div>
        )
    }
}
export default Home;