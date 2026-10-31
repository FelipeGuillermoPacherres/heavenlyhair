import React from "react";
import imgLogo from "../../../../../public/img/logo-bk.png";

export default function Header({ url, path, lang = 'es' }) {

    const logoTag = (
        <img src={imgLogo} className="logo" alt="Heavenly Hair Salon Tampa - Logo" />
    );


    //console.log(lang);

    const bookNowButton = {
        es: 'Reservar una cita',
        en: 'Book now'
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

                    <div className="col-auto p-0">
                        <a>{bookNowButton[lang]}</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
