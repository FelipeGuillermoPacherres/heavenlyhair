import React from "react";
import FrameImage from "../../../../../public/img/sec2-image.jpg";
import ActionButton from "../Components/ActionButton.jsx";

export default function AboutUsFrame({ lang = "es" }) {
    const frameText = {
        es: {
            title: "Tu belleza, nuestra ",
            btitle: "pasión.",
            text1: "En Heavenly Hair Salon creemos que cada persona merece sentirse única, segura y hermosa.",
            text2: "Nos apasiona transformar cada visita en una experiencia especial, combinando talento, dedicación y atención a cada detalle. Ya sea un cambio de look, un nuevo color o el estilo perfecto para una ocasión especial, estamos aquí para resaltar lo mejor de ti.",
            text3: "Porque para nosotros, no se trata solo de tu cabello, sino de cómo te hacemos sentir.",
            button: "CONOCE NUESTROS SERVICIOS",
            imageAlt: "Herramientas de peluquería en tonos negro y dorado",
        },
        en: {
            title: "Your beauty, our ",
            btitle: "passion.",
            text1: "At Heavenly Hair Salon, we believe that everyone deserves to feel unique, confident, and beautiful.",
            text2: "We are passionate about turning every visit into a special experience, combining talent, dedication, and attention to every detail. Whether it’s a complete makeover, a new hair color, or the perfect style for a special occasion, we are here to bring out the best in you.",
            text3: "Because for us, it’s not just about your hair—it’s about how we make you feel.",
            button: "DISCOVER OUR SERVICES",
            imageAlt: "Hair styling tools in black and gold",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return (
        <section className="about-us-frame p-3 p-md-5 bg-gray-hhs">
            <div className="row mx-0 align-items-center">
                {/* Imagen */}

                <div className="col-12 col-lg-6 order-2 order-lg-1 px-5 px-md-3">
                    <img
                        src={FrameImage}
                        className="w-100 au-frame-img"
                        alt={text.imageAlt}
                    />
                </div>

                {/* Texto y botón de escritorio */}
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                    <div className="p-3 p-md-5">
                        <h2 className="au-title">
                            {text.title}
                            <span className="text-gold-hhs fw-bold">
                                {text.btitle}
                            </span>
                        </h2>

                        <div
                            className="hhs-gold-line"
                            aria-hidden="true"
                        />

                        <div className="au-text">
                            <p>{text.text1}</p>
                            <p>{text.text2}</p>
                            <p className="fw-bold">{text.text3}</p>
                        </div>

                        <div className="pt-4 d-none d-lg-block">
                            <ActionButton className="about-button">
                                {text.button}
                            </ActionButton>
                        </div>
                    </div>
                </div>

                {/* Botón debajo de la imagen en móvil y tablet */}
                <div className="col-12 order-3 d-lg-none text-center pt-5 pb-3">
                    <ActionButton className="about-button">
                        {text.button}
                    </ActionButton>
                </div>
            </div>
        </section>
    );
}
