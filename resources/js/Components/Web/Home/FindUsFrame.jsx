import React from "react";
import fuImg from "../../../../../public/img/heavenly-hair-local.jpg";
import ActionButton from "../Components/ActionButton.jsx";

export default function FindUsFrame({lang = "es"}) {

    const frameText = {
        es: {
            title: "Tu momento de belleza comienza ",
            btitle: "aquí.",
            text1: "Un espacio pensado para consentirte, relajarte y hacerte sentir espectacular. Ven a conocernos y déjanos cuidar de ti.",
            button: "¿CÓMO LLEGAR?",
        },
        en: {
            title: "Your beauty journey starts ",
            btitle: "here.",
            text1: "Step into a space designed for relaxation, self-care, and transformation. Let our team help you look and feel your best from the moment you arrive.",
            button: "TAKE ME THERE",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const dataContent = {
        es: {
            addressTitle: "Visítanos",
            phoneTitle: "Llámanos",
            hoursTitle: "Horario de atención",
            weekdays: "Lunes a viernes",
            saturday: "Sábados",
            sunday: "Domingo",
            closed: "CERRADO",
            button: "CÓMO LLEGAR",
            imageAlt: "Fachada de Heavenly Hair Salon en Tampa, Florida"
        },
        en: {
            addressTitle: "Visit Us",
            phoneTitle: "Call Us",
            hoursTitle: "Business Hours",
            weekdays: "Monday to Friday",
            saturday: "Saturday",
            sunday: "Sunday",
            closed: "CLOSED",
            button: "TAKE ME THERE",
            imageAlt: "Exterior of Heavenly Hair Salon in Tampa, Florida"
        }
    };

    const dataText = dataContent[lang] ?? dataContent.en;

    return(
        <section className={'find-us-frame p-3 p-md-5 bg-gray-hhs'}>
            <h2 className="fu-title text-center">
                {text.title}
                <span className="text-gold-hhs fw-bold">
                    {text.btitle}
                </span>
            </h2>

            <div className="fu-text pt-4 px-3 px-md-5">
                <p>{text.text1}</p>
            </div>

            <div className={'fu-location pt-3 pt-md-5'}>
                <div className={'row mx-0'}>
                    <div className={'col-12 col-md-6 order-2 order-md-1 align-content-center pt-4 pt-md-0'}>
                        <div className="fu-loc-data">

                            {/* Dirección */}
                            <div className="address d-flex gap-3 mb-4">
                                <i className="fa-solid fa-location-dot text-gold-hhs"></i>

                                <div>
                                    <h3>{dataText.addressTitle}</h3>
                                    <a href={'https://maps.app.goo.gl/V5ysrnqvaZ9scamf7'} target={'_blank'}>2701 W Tampa Bay Blvd, Tampa, FL 33607</a>
                                </div>
                            </div>

                            {/* Teléfonos */}
                            <div className="phone d-flex gap-3 mb-4">
                                <i className="fa-solid fa-phone text-gold-hhs"></i>

                                <div>
                                    <h3>{dataText.phoneTitle}</h3>

                                    <a href="tel:+18138751900">
                                        (813) 875-1900
                                    </a>

                                    <a href="tel:+18138932326">
                                        (813) 893-2326
                                    </a>
                                </div>
                            </div>

                            {/* Horarios */}
                            <div className="service-hours d-flex gap-3 mb-4">
                                <i className="fa-regular fa-clock text-gold-hhs"></i>

                                <div>
                                    <h3>{dataText.hoursTitle}</h3>

                                    <p>
                                        {dataText.weekdays}: 9:00 AM - 5:00 PM
                                    </p>

                                    <p>
                                        {dataText.saturday}: 8:00 AM - 4:00 PM
                                    </p>

                                    <p>
                                        {dataText.sunday}: <strong>{dataText.closed}</strong>
                                    </p>
                                </div>
                            </div>

                            <div className={'findus-button ps-md-4'}>
                                <ActionButton
                                    href="https://maps.app.goo.gl/V5ysrnqvaZ9scamf7"
                                    target={'_blank'}
                                    className="fu-button"
                                >
                                    {text.button}
                                </ActionButton>
                            </div>

                        </div>
                    </div>
                    <div className={'col-12 col-md-6 order-1 order-md-2'}>
                        <img src={fuImg} className={'w-100'} alt={dataText.imageAlt}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
