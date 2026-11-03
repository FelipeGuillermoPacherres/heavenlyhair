import React from "react";

export default function GoldDivider({background = true}) {
    return (
        <div className={"gold-divider " + (background === true ? 'bg-gray-hhs' : 'gold-divider-bg-none' )} role="separator" aria-hidden="true" >
            <span className="gold-divider-line"></span>

            <i className="fa-solid fa-crown"></i>

            <span className="gold-divider-line"></span>
        </div>
    );
}
