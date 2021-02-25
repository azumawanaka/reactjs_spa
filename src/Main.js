import React, { Component } from "react";
import {
    Route,
    BrowserRouter
} from 'react-router-dom';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Top from "./pages/Top";
import NewsDetail from "./pages/NewsDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

class Main extends Component
{
    render() {
        return(
            <BrowserRouter>
                <Header />
                <div className="main-content">
                    <Route exact path="/">
                        <Top />
                    </Route>
                    <Route path="/news/:detail">
                        <NewsDetail />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </div>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default Main;