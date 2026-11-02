import React from "react";

export default function ActionButton({
 children,
 href,
 target = '_self',
 onClick,
 type = 'button',
 className = '',
 btnColor = 'black'
}) {
    const content = (
        <>
            <span>{children}</span>
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </>
    );

    const classes = `hhs-action-button ${btnColor}-button ${className}`;

    return href ? (
        <a href={href} className={classes} onClick={onClick} target={target}>
            {content}
        </a>
    ) : (
        <button type={type} className={classes} onClick={onClick}>
            {content}
        </button>
    );
}
