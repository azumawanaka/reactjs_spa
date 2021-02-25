import React, { Component } from "react";
import Slider from './Slider';

class Hero extends Component
{
    render() {
        const heroItems = this.props.heroItems;
        return (
            <div className="hero-slider">
                <div className="slider-inner">
                    <Slider arrayItems={heroItems} />
                </div>
            </div>
        );
    }
}

export default Hero