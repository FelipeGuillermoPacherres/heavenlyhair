import React from "react";
import imgLogo from "../../../../../public/img/logo-bk.png";
import SocialMediaLabelModal from "../Components/Modals/SocialMediaLabelModal.jsx";

export default function Header({ url, path, lang = 'es' }) {

    const logoTag = (
        <img src={imgLogo} className="logo" alt="Heavenly Hair Salon Tampa - Logo" />
    );


    //console.log(lang);

    const bookNowButton = {
        es: 'AGENDAR CITA',
        en: 'BOOK NOW'
    };

    return(
        <header>
            <nav className={'navbar-hhs'}>
                <div className="menu row mx-0 justify-content-between">

                    {/* LOGO */}
                    <div className="col-auto p-0">
                        <a href={`/`}>
                            {logoTag}
                        </a>
                    </div>

                    <div className="col-auto p-0 align-content-center">
                        <a className={'btn btn-md booking-button'} href="tel:+18138751900">{bookNowButton[lang]}</a>
                    </div>
                </div>

                <SocialMediaLabelModal lang={lang} />
            </nav>
        </header>
    )
}
