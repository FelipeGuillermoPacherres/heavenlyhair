import React from "react";
import imgLogo from "../../../../../public/img/logo-wh.png";
import fpWebDesignsLogo from "../../../../../public/img/fp-web-designs-logo-black.svg";
import { socialMedia } from "../../Data/SocialMedia.jsx";
import FPWDModal from "../Components/Modals/FPWDModal.jsx";

export default function Footer({ url, path, lang = 'es' }){

    const year = new Date().getFullYear();

    const frameText = {
        es: {
            slogan: "Donde la belleza se encuentra con la PERFECCION.",
            contactTitle: 'CONTÁCTANOS',
            socialMediaTitle: 'SÍGUENOS',
            copyRight:'Todos los derechos reservados.',
            fpLabel1:'Diseñado con ',
            fpLabel2:' por ',
        },
        en: {
            slogan: "Where beauty meets PERFECTION.",
            contactTitle: 'CONTACT US',
            socialMediaTitle: 'FOLLOW US',
            copyRight:'All rights reserved.',
            fpLabel1:'This website was made with ',
            fpLabel2:' by ',
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
        <section className={'hhs-footer px-3 py-4 p-md-5'}>
            <div className="container-fluid px-0 mx-0">
                <div className={'row mx-0 justify-content-between'}>

                    <div className={'col-12 col-md-3 logo-slogan-area'}>
                        <img src={imgLogo} alt={'Heavenly Hair Salon - Logo'}/>
                        <h3 className={'pt-4'}>{text.slogan}</h3>
                    </div>

                    <div className={'col-12 col-md-3 contact-area pt-3 pt-md-0'}>
                        <h3 className={'text-gold-hhs'}>{text.contactTitle}</h3>

                        <div className="contact-data pt-1 pt-md-3">

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
                            <div className="service-hours d-flex gap-3">
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

                        </div>
                    </div>

                    <div className={'col-12 col-md-3 social-media-area pt-3 pt-md-0'}>
                        <h3 className={'text-gold-hhs'}>{text.socialMediaTitle}</h3>

                        <div className="social-media-data pt-1 pt-md-3">
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

                <div className={'gold-spacer mt-3'}></div>

                <h5 className={'py-3 px-3 px-md-5'}>{'© ' + year + ' Heavenly Hair Salon. ' + text.copyRight}</h5>

                <FPWDModal labelText={text} lang={lang} />

            </div>
        </section>
    )
}
