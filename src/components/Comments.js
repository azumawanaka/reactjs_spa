import React, { Component } from "react";
import { LoremIpsum } from 'react-lorem-ipsum';

class Comments extends Component
{
    constructor() {
        super();
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            items: [],
            date: date
        }
    }

    add() {
        let comments = document.getElementById('comment');
        if (comments.value === "") {
            return;
        }

        let items = this.state.items;
        items.unshift( comments.value );
        this.setState( { items: items } );
        comments.value = "";
    }

    render() {
        let divItems = this.state.items.map( ( item, index ) => {
            return <dl>
                <dt>{item}</dt>
                <dd>{this.state.date}</dd>
            </dl>
        });
        return (
            <div className="cntr">
                <h2 className="title-lg">Comments</h2>
                <div className="comments-list">
                    {divItems}
                    <dl>
                        <dt><LoremIpsum p={1} /></dt>
                        <dd>2021.1.12</dd>
                    </dl>
                </div>
                <form className="comments-form">
                    <textarea id="comment" placeholder="Write comments..."></textarea>
                    <button type="button" className="btn-submit" onClick={this.add.bind( this )}>submit</button>
                </form>
            </div>
        );
    }
}

export default Comments