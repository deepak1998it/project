import React from 'react';



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg   bg-dark">
                    <div class="container-fluid">
                        <a style={{ color: 'white' }} class="navbar-brand" href="/">Home</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                {/* <a style={{ color: 'white' }} class="nav-link active" aria-current="page" href="/">signin</a> */}
                                {/* <a style={{ color: 'white' }} class="nav-link" href="/signup">SignUp</a> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;