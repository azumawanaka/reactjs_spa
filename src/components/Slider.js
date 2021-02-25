import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import Carousel from 'react-elastic-carousel';

class Slider extends Component
{
    render() {
        const arrayItems = this.props.arrayItems;
        return (
            <Carousel itemsToShow={1}>
                {
                    arrayItems.map((item, index) =>{
                        return (
                            <div key={index} className="slider-item">
                                <div className="slider-img">
                                    <img src={item['img']} alt="slider image" className="w-100" />
                                </div>
                                <div className="slider-content">
                                    <div className="inner-content">
                                        <h4>
                                            {ReactHtmlParser(item['bodyText'])}
                                        </h4>
                                        <time className="date">{item['date']}</time>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </Carousel>
        );
    }
}

export default Slider