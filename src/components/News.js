import React, { Component } from "react";

class News extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            limit: 6,
        };

        this.onLoadMore = this.onLoadMore.bind(this);
    }

    onLoadMore() {
        this.setState({
            limit: this.state.limit + 3
        });

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    renderTodos() {
        const newsItems = this.props.newsItems;

        return newsItems.slice(0, this.state.limit).map((item, index)=>{
            return(
                <div key={index} className="md-4 xs-12 mb-60">
                    <a href={`/news/${index}/${item['title']}`} className="card-news">
                        <div className="card-img">
                            <img src={ "./"+item['img'] } alt="News 1" className="w-100" />
                        </div>
                        <div className="card-body">
                            <small className="date">{item['date']}</small>
                            <p>{item['title']}</p>
                        </div>
                    </a>
                </div>
            );
        });
    }

    render() {
        const newsItems = this.props.newsItems;
        
        let divItems =  newsItems.slice(0, this.state.limit).map((item, index) =>{
            return (
                <div key={index} className="md-4 xs-12 mb-60">
                    <a href={`/news/${index}/${item['title']}`} className="card-news">
                        <div className="card-img">
                            <img src={ "./"+item['img'] } alt="News 1" className="w-100" />
                        </div>
                        <div className="card-body">
                            <small className="date">{item['date']}</small>
                            <p>{item['title']}</p>
                        </div>
                    </a>
                </div>
            );
        })

        return (
            <div className="cntr">
                <h2 className="title-lg">News</h2>
                <div className="gap gap-0-xs gap-25">
                    {divItems}
                </div>
                <div className="tc">
                    <button type="button" onClick={this.onLoadMore} className="btn btn-loadmore">Load More</button>
                </div>
            </div>
        );
    }
}

export default News