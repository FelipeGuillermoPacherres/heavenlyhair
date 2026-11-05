import React from "react";
import ActionButton from "../Components/ActionButton.jsx";

export default function HeroFrame({ url, lang = "es" }) {
    const frameText = {
        es: {
            hero: "Donde la belleza se encuentra con la",
            bhero: "PERFECCIÓN",
            heroDescription: "Tu salón de belleza en Tampa, Florida. A solo minutos del estadio de los Buccaneers.",
            button: "AGENDAR CITA",
        },
        en: {
            hero: "Where beauty meets",
            bhero: "PERFECTION",
            heroDescription: "Your hair salon in Tampa, Florida. Just minutes from Raymond James Stadium.",
            button: "BOOK NOW",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const heroImageStyle = {
        backgroundImage: `url(${url}/img/hero-image.jpg)`,
    };

    return (
        <section className="hf-style row mx-0">
            <div className="col-12 col-md-6 hero-content px-3 px-md-5">
                <h1 className="hero-text">
                    {text.hero}{" "}
                    <strong className="text-gold-hhs underline">
                        {text.bhero}
                    </strong>
                </h1>

                <p className={'hero-description px-3 pe-md-0'}>{text.heroDescription}</p>

                <div className="d-none d-md-block text-center pt-5">
                    <ActionButton className="hero-button" href="tel:+18138751900">
                        {text.button}
                    </ActionButton>
                </div>
            </div>

            <div
                className="col-12 col-md-6 hero-image"
                style={heroImageStyle}
            >
                <div className="hero-mobile-action d-md-none">
                    <ActionButton className="hero-button golden-border" href="tel:+18138751900">
                        {text.button}
                    </ActionButton>
                </div>
            </div>
        </section>
    );
}
