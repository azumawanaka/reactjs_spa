import React from "react";
import { LoremIpsum } from 'react-lorem-ipsum';
import BreadCrumbs from "../components/BreadCrumbs";
import NewsItems from "../components/NewsItems";
import Comments from "../components/Comments";

function NewsDetail(props) {
    return(
        <main>
            <BreadCrumbs />

            <div className="cntr news-details">
                <div className="date">{NewsItems[0].date}</div>
                <h2 className="title-md">{NewsItems[0].title}</h2>
                <div className="news-img">
                    <img src={"../../"+NewsItems[0].img} alt={NewsItems[0].title} className="w-100" />
                </div>
                <div className="news-info">
                    <LoremIpsum p={2} />
                </div>
            </div>

            <Comments />
        </main>
    );
}

export default NewsDetail