import React from "react";
import Hero from "../components/Hero";
import News from "../components/News";
import NewsItems from "../components/NewsItems";
import HeroItems from "../components/HeroItems";

function Top(props) {
    return(
        <main>
            <Hero heroItems={HeroItems} />
            <News newsItems={NewsItems} />
        </main>
    );
}

export default Top;