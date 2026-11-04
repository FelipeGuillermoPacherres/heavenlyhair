import React ,{useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import imgLogo from "../../../../../../public/img/logo-bk.png";

export default function SocialMediaLabelModal({ lang = 'es'}) {
    const [showModal, setShowModal] = useState(false);

    const frameText = {
        es: {
            slogan1: "Donde la belleza se encuentra con la ",
            slogan2: 'PERFECCION.'
        },
        en: {
            slogan1: "Where beauty meets ",
            slogan2: 'PERFECTION.'
        },
    };

    const text = frameText[lang] ?? frameText.en;

    const hhsLinks = [
        {
            id: 1,
            media: 'Instagram',
            button: {
                es: 'Inspírate en Instagram',
                en: 'Get inspired on Instagram',
            },
            icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/heavenlyhair.fl',
        },
        {
            id: 2,
            media: 'TikTok',
            button: {
                es: 'Descúbrenos en TikTok',
                en: 'Discover us on TikTok',
            },
            icon: 'fa-brands fa-tiktok',
            link: 'https://www.tiktok.com/@heavenlyhair.fl',
        },
        {
            id: 3,
            media: 'Google',
            button: {
                es: 'Conócenos en Google',
                en: 'Find us on Google',
            },
            icon: 'fa-brands fa-google',
            link: 'https://share.google/8OnnyYWziYXDEV0n9',
        },
        {
            id: 4,
            media: 'Google Maps',
            button: {
                es: 'Encuentra tu camino al salón',
                en: 'Get directions to the salon',
            },
            icon: 'fa-solid fa-map-location-dot',
            link: 'https://maps.app.goo.gl/TRQNGiHbLLL36Sky9',
        },
        {
            id: 5,
            media: 'Llamada',
            button: {
                es: 'Llámanos, estamos para ti',
                en: 'Give us a call',
            },
            icon: 'fa-solid fa-phone',
            link: 'tel:+18138751900',
        },
    ];

    return(
        <>
            <div className={'nb-contact-label'}>
                    <a onClick={() => setShowModal(true)}>
                        <i className="fa-brands fa-instagram me-1"></i>
                        <i className="fa-brands fa-tiktok me-1"></i>
                        @heavenlyhair.fl
                    </a>
            </div>

            <Modal
                size="md"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                scrollable
                className="social-media-label-modal"
            >
                <ModalHeader className="border-0" closeButton></ModalHeader>
                <ModalBody>
                    <div className={'logo-div'}>
                        <img src={imgLogo} alt="Heavenly Hair Salon" className={'w-75'}/>
                    </div>
                    <div className={'slogan-div'}>{text.slogan1}<strong className={'text-gold-hhs'}>{text.slogan2}</strong></div>

                    <div className={'links-div'}>
                        {hhsLinks.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target={item.media === 'SMS' ? undefined : '_blank'}
                                rel={item.media === 'SMS' ? undefined : 'noopener noreferrer'}
                                className={`social-media-link-button btn ${
                                    item.media === 'SMS' ? 'd-md-none' : ''
                                }`}
                            >
                                <i className={`${item.icon} me-2`} aria-hidden="true" />
                                <span>{item.button[lang] ?? item.button.en}</span>
                            </a>
                        ))}
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
