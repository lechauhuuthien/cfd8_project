import classNames from 'classnames';
import React from 'react';
import "./style_button.scss";

function Button(props) {
    const { children, color = "default", type = "default", size = "small", round = true, icon } = props;
    return (
        <button
            className={
                classNames('button__container', `color-${color}`, `type-${type}`, `size-${size}`, `type=${type}`, { round })
            } >
            {type === 'icon-left' && icon}
            {children}
            {type === 'icon-right' && icon}
        </button>
    );
}

export default Button;