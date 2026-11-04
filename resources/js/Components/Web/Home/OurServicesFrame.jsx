import React from "react";
import { categories } from '../../Data/Categories.jsx';
import ServicesModal from "../Components/Modals/ServicesModal.jsx";
import ActionButton from "../Components/ActionButton.jsx";

export default function OurServicesFrame({ lang = "es" }) {

    const frameText = {
        es: {
            title: "Todo lo que necesitas para sentirte ",
            btitle: "radiante.",
            text1: "Belleza, estilo y bienestar en un solo lugar. Descubre nuestros servicios diseñados para consentirte de pies a cabeza.",
            button: "AGENDAR CITA",
        },
        en: {
            title: "Everything you Need to ",
            btitle: "glow.",
            text1: "Beauty, Style & Wellness, All in One Place. Indulge in a complete beauty experience with services designed to help you look and feel your best.",
            button: "BOOK NOW",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return(
        <section id="our-services" className={'our-services-frame p-3 p-md-5 bg-gray-hhs'}>
            <h2 className="os-title text-center">
                {text.title}
                <span className="text-gold-hhs fw-bold">
                    {text.btitle}
                </span>
            </h2>

            <div className="os-text pt-4 px-3 px-md-5">
                <p>{text.text1}</p>
            </div>

            <div className={'os-cards pt-3 pt-md-5 container'}>
                <div className="row g-4 g-lg-5 justify-content-center">
                    {categories.map((data) => (
                        <div className="col-12 col-md-6 col-lg-4" key={data.id}>
                            <ServicesModal lang={lang} data={data} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

