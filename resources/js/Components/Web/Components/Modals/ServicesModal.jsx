import React, {useState} from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import ActionButton from "../ActionButton.jsx";

export default function ServicesModal({data, lang}) {

    const [showModal, setShowModal] = useState(false);

    const buttonText = {
        es: 'AGENDAR CITA',
        en: 'BOOK NOW'
    }

    const modalText = {
        es: {
            disclaimer: "Los precios mostrados son a partir del monto indicado y pueden variar según el servicio y las necesidades de cada cliente."
        },
        en: {
            disclaimer: "Prices shown are starting rates and may vary depending on the service and individual needs."
        }
    };

    return(
        <>
            <div className={'service-card'} onClick={(e) => setShowModal(true)}>
                <div className="service-card-image">
                    <img
                        className="w-100"
                        src={data.img}
                        alt={data.imgAlt}
                    />
                </div>

                <h3 className="service-card-title mt-3">
                    {data.name[lang]}
                </h3>
                <div
                    className="hhs-gold-line-2"
                    aria-hidden="true"
                />
            </div>

            <Modal
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                scrollable
                className="services-modal"
            >
                <ModalHeader className="border-0" closeButton>
                    <ModalTitle>
                        <div className="d-flex align-items-start">
                            <span className="icon me-2">
                                <i className={data.icon}></i>
                            </span>

                            <div className="d-flex flex-column pe-2 pe-md-0">
                                <span>{data.name[lang]}</span>

                                <small className="modal-price-note">
                                    {lang === 'es'
                                        ? 'Los precios son a partir del monto indicado y pueden variar según el servicio.'
                                        : 'Starting prices shown. Final prices may vary depending on the service.'}
                                </small>
                            </div>
                        </div>
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <ul className="services-list list-unstyled mb-0">
                        {data.services.map((service, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center gap-3 py-3">
                                <span className="service-name">
                                    {service[lang]}
                                </span>

                                <span className="service-price text-gold-hhs fw-bold">
                                    {Array.isArray(service.price)
                                        ? service.price.map(price => `$${price}`).join(' / ')
                                        : `$${service.price}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </ModalBody>

                <ModalFooter className={'justify-center'}>
                    <ActionButton className="services-button">
                        {buttonText[lang]}
                    </ActionButton>
                </ModalFooter>
            </Modal>
        </>
    )
}
