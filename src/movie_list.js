import React from 'react';
import { Signout } from './Auth';


class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: {},
            spinner: true
        }
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ad3ffa3c', {
            method: 'GET',
        })
            .then(function (response) {
                return response.json()
            })
            .then((result) => {
                console.log(result)
                this.setState({ movieList: result, spinner: false })
            })
    }
    render() {
        const { movieList, spinner } = this.state
        if (spinner) {
            return (<div className="text-center">
                <Header />
                <div style={{ margin: '20%' }} className=" spinner-border"></div>
            </div>)
        }
        return (
            <div>
                <Header />
                <div className="container">
                    <div style={{ textAlign: 'center', marginTop: '3%' }}>
                        <img alt="movie" className="img-responsive" src={movieList['Poster']} />
                        <h5>  {movieList['Title']}</h5>
                        <p>  {movieList['Writer']}</p>
                        <p>🏆  {movieList['Awards']}</p>
                        <br></br>
                        <p>  {movieList['Actors']}</p>
                        <p>{movieList['Plot']}</p>
                        <p style={{ fontWeight: 'bold' }}>BoxOffice {movieList['BoxOffice']}
                            <br></br>Production : {movieList['Production']}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieList;

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                &nbsp; Hi Deepak
                             </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li className="nav-item bg-dark">
                                    <a style={{ color: 'white' }} className="nav-link active" onClick={() => Signout()} aria-current="page" href="">
                                        Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}