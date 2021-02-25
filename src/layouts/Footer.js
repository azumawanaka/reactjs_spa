import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component
{
    constructor(props) {
        super(props);
    }

    handleClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <footer>
                <div className="banner">
                    <div className="cntr pos-rel">
                        <Link to="/" className="logo">
                            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="Logo" />
                        </Link>
                        <div className="banner-info">
                            <h3>サンプルテキストサンプル ルテキストサンプルテキストサンプルテキストサンプル ルテキスト</h3>
                        </div>
                        
                        <button 
                            className="pg-top"
                            onClick={this.handleClick} 
                        >
                            TOP
                        </button>
                    </div>
                </div>
                <div className="copyright">Copyright©2007-2019 Blog Inc.</div>
            </footer>
        );
    }
}

export default Footer