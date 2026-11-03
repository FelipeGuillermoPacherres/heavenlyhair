import React from 'react';
import GoldDivider from "../Components/GoldDivider.jsx";
import HeroFrame from "./HeroFrame.jsx";
import AboutUsFrame from "./AboutUsFrame.jsx";
import OurServicesFrame from "./OurServicesFrame.jsx";
import FindUsFrame from "./FindUsFrame.jsx";
import SocialMediaFrame from "./SocialMediaFrame.jsx";
import BookingFrame from "./BookingFrame.jsx";

export default function index({url, lang = 'es'}) {
    return(
        <>
            <HeroFrame url={url} lang={lang} />

            <AboutUsFrame lang={lang} />

            <GoldDivider />

            <OurServicesFrame lang={lang} />

            <GoldDivider />

            <FindUsFrame lang={lang} />

            <SocialMediaFrame lang={lang} />

            <BookingFrame lang={lang} />

        </>
    )
}
