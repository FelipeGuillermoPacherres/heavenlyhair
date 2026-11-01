import React from "react";
import imgLogo from "../../../../../public/img/logo-bk.png";

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
                        <a className={'btn btn-md booking-button'}>{bookNowButton[lang]}</a>
                    </div>
                </div>

                <div className={'nb-contact-label'}>
                    <span>
                        <i className="fa-brands fa-square-facebook me-1"></i>
                        <i className="fa-brands fa-square-instagram me-1"></i>
                        <i className="fa-brands fa-tiktok me-1"></i>
                        @heavenlyhair.fl
                    </span>
                </div>
            </nav>
        </header>
    )
}
