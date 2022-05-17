import React from 'react';
import styles from './DropDown.module.css';

const DropDown = ({ options, className }) => {
    return (
        <select className={className} name="" id="" >
            {
                options.map((el, i) => <option key={i} value={el}>{el}</option>)
            }
        </select>
    );
};

export default DropDown;