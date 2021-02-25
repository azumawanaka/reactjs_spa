import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import NewsItems from "../components/NewsItems";

class BreadCrumbs extends Component
{
    render() {
        return (
            <div className="breadcrumbs-wrapper">
                <div className="cntr">
                    <ul className="breadcrumbs">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <span>{NewsItems[0].title}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default BreadCrumbs