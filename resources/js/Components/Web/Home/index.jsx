import React from 'react';
import HeroFrame from "./HeroFrame.jsx";
import AboutUsFrame from "./AboutUsFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <AboutUsFrame lang={lang} />
        </>
    )
}
