import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
    <div className="nav-block">
       <div className="container">
           <div className="row nav-items">
                <div className="col-12 d-flex justify-content-between align-items-center">

                    <a className="logo" href="/">
                        <h5 className="logo__item">TATRA<span className="logo-color__item">DEV</span></h5>
                        <img className="img-logo"src="base/img/tiger.svg" alt=" /" />
                    </a>

            <nav className="navbar navbar-expand-lg navbar-light p-0 d-none d-lg-block">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" aria-haspopup="true" aria-expanded="false">Services</a>
                                    <div className="dropdown-menu" id="top_notify_wrap" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="/">
                                            <div className="d-flex">
                                                <div className="dropdown-img">
                                                    <img className="dropdown-img__item" src="base/img/brain.svg" alt="" />
                                                </div>
                                                <div className="">
                                                    <h1 className="dropdown-title">AI</h1>
                                                    <p className="dropdown-subtitle">Lorem ipsum dolor sit amet, consectetur <br />
                                                    adipisicing elit. Aut, adipisci.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            <div className="d-flex">
                                                <div className="dropdown-img">
                                                    <img className="dropdown-img__item" src="base/img/console.svg" alt="" />
                                                </div>
                                                <div className="">
                                                    <h1 className="dropdown-title">Game</h1>
                                                    <p className="dropdown-subtitle">Lorem ipsum dolor sit amet, consectetur <br />
                                                    adipisicing elit. Aut, adipisci.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item" href="/">
                                            <div className="d-flex">
                                                <div className="dropdown-img">
                                                    <img className="dropdown-img__item" src="base/img/globe.svg" alt="" />
                                                </div>
                                                <div className="">
                                                    <h1 className="dropdown-title">Web</h1>
                                                    <p className="dropdown-subtitle">Lorem ipsum dolor sit amet, consectetur <br />
                                                    adipisicing elit. Aut, adipisci.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link" href="/">Products</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/">About us</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/">Blog</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contacts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <h1 className="ru">RU</h1>
                                        <img className="ru-img" src="base/img/russia.svg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="nav-btn">
                        <a href="/">
                            <button className="btn">Get in touch</button>
                        </a>
                    </div>
                </div>
           </div>
       </div>
   </div>
        );
    }
}
export default NavBar;