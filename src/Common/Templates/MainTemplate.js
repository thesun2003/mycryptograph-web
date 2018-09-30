import React, { Component } from 'react';
import { Link } from 'react-router-component';
import { Slot } from 'react-page-layout';
import { Helmet } from 'react-helmet';

import logo from './logo.svg';
import './MainTemplate.css';

class MainTemplate extends Component {
    render() {
        return (
            <div className="App">

                <Slot name="title">
                    <Helmet>
                        <title>MCG App</title>
                    </Helmet>
                </Slot>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <nav>
                        <Slot name="navigation">
                            <Link global href="/">Main page</Link>
                            <Link global href="/balance/USD/">Current balance</Link>
                        </Slot>
                    </nav>
                </header>

                <content>
                    <Slot name="content" />
                </content>

                <footer>
                    Page Footer
                </footer>

            </div>
        );
    }
}

export default MainTemplate;