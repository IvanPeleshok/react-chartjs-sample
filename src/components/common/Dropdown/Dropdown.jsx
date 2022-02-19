import { Dropdown as DropDownRsuite } from "rsuite";
import React from "react";
import { Icon } from "../Icon/Icon";
import "./Dropdown.scss";

export function Dropdown({ items, onSelect, defaultItem }) {
    if (!items.length && defaultItem.name) {
        return <></>;
    }

    return (
        <DropDownRsuite
            title={defaultItem.name}
            className={"dropdown"}
            icon={(() => (
                <Icon src={defaultItem.icon} />
            ))()}
        >
            {items.map((item) => (
                <DropDownRsuite.Item key={item.id} onSelect={() => onSelect(item)}>
                        <Icon src={item.icon} />
                        {item.name}
                </DropDownRsuite.Item>
            ))}
        </DropDownRsuite>
    );
}
