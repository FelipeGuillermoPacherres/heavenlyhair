import React from "react";
import frameIMG from "../../../../../public/img/heavenly-hair-booking-banner.png";
import ActionButton from "../Components/ActionButton.jsx";

export default function BookingFrame({lang = 'es'}) {

    const frameText = {
        es: {
            title: "¿Lista para lucir",
            btitle: "ESPECTACULAR?",
            text1: "Regálate un momento para ti.  Déjanos cuidar de tu cabello y ayudarte a conseguir ese look que tanto deseas.",
            imageAlt:
                "Mujer con cabello largo y ondulado enviando un beso.",
            button: "AGENDAR CITA",
        },
        en: {
            title: "Ready to look ",
            btitle: "STUNNING?",
            text1: "Take a moment for yourself. Let us care for your hair and help you achieve the look you’ve been dreaming of.",
            imageAlt:
                "Woman with long, wavy hair blowing a kiss.",
            button: "BOOK NOW",
        },
    };

    const text = frameText[lang] ?? frameText.en;

    return(
        <section className="booking-frame pt-4 pt-md-5 px-3 px-md-5 pb-0 bg-ligth-gold-hhs">
            <div className={'row mx-0'}>
                <div className={'col-12 col-md-7 align-content-center pb-5 pb-md-0'}>

                    <h2 className="bf-title pt-4 px-3 px-md-5">
                        {text.title}
                        <span className="text-gold-hhs fw-bold">
                            {text.btitle}
                        </span>
                    </h2>

                    <div className="bf-text py-4">
                        <p>{text.text1}</p>
                    </div>

                    <div className="bf-button-div">
                        <ActionButton className="bf-button" href="tel:+18138751900">
                            {text.button}
                        </ActionButton>
                    </div>

                </div>
                <div className={'col-12 col-md-5 text-center'}>
                    <img src={frameIMG} alt={text.imageAlt}/>
                </div>
            </div>
        </section>
    )

}
