import React from 'react';
import "./Icon.scss";

export function Icon({src, country}) {

    const onClick = (ev) => {
        ev.preventDefault();
    }

    return (
        <span className="icon__wrapper" onClick={onClick}>
            <img src={src} alt={country} />
        </span>
    )
}