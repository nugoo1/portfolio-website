import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

export const Navigation = () => (
    <Navbar
        color="faded" light
        expand="md"
        className="navbar-dark navbar-expand-sm content-container"
    >
        <div className="header__content">
            <Link to="/" >
                <img alt="Brand" className="brand" src="https://image.ibb.co/jvvQ5p/logo.png" />
            </Link>
            <Nav
                className="ml-auto"
                navbar>
                <NavItem>
                    <NavLink
                        className="margin-right nav-color"
                        exact to="/"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    >
                        About</NavLink>
                    <NavLink
                        className="margin-right nav-color"
                        exact to="/work"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    >
                        Work</NavLink>
                    <NavLink
                        className="nav-color"
                        exact to="/notes"
                        activeStyle={{
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    >
                        Notes</NavLink>

                </NavItem>
            </Nav>
        </div>
    </Navbar>
);

