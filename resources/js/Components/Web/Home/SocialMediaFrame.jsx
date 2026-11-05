import React from "react";
import smImg from "../../../../../public/img/heavenly-hair-social-media.jpg";
import { socialMedia } from "../../Data/SocialMedia.jsx";
import GoldDivider from "../Components/GoldDivider.jsx";

export default function SocialMediaFrame({ lang = "es" }) {
    const frameText = {
        es: {
            title: "Inspírate, conéctate y sé parte de ",
            btitle: "nuestra comunidad.",
            text1: "Descubre nuestros trabajos, tips de belleza, transformaciones, promociones y todo lo que sucede en Heavenly Hair Salon. ¡Síguenos y no te pierdas nada!",
            imageAlt:
                "Teléfono mostrando el perfil de Instagram de Heavenly Hair Salon sobre una estación de peluquería",
        },
        en: {
            title: "Join our ",
            btitle: "Beauty Community.",
            text1: "Discover our latest work, beauty tips, stunning transformations, special offers, and everything happening at Heavenly Hair Salon. Follow us and never miss a moment!",
            imageAlt:
                "Phone displaying Heavenly Hair Salon’s Instagram profile on a salon styling station",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return (
        <section className="social-media-frame px-3 px-md-5 py-1 py-md-3">

            <h2 className="sm-title text-center pt-4 pt-md-5">
                {text.title}
                <span className="text-gold-hhs fw-bold">
                    {text.btitle}
                </span>
            </h2>

            <div className="sm-text pt-4 px-3">
                <p>{text.text1}</p>
            </div>

            <div className="sm-div py-4 py-md-5">
                <div className="row mx-0 align-items-center justify-content-center gx-4 gy-4">
                    <div className="col-12 col-lg-auto">
                        <img
                            src={smImg}
                            className="sm-image"
                            alt={text.imageAlt}
                            loading="lazy"
                        />
                    </div>

                    <div className="col-12 col-lg-5">
                        <div className="sm-div-list">
                            {socialMedia.map((data) => (
                                <a className="sm-item" key={`${data.name}-${data.username}`} href={data.link} target={'_blank'}>
                                    <div className="icon-div">
                                        <i
                                            className={data.icon}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div className="sm-item-content">
                                        <h3>{data.name}</h3>
                                        <p>{data.username}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
