import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

const TextareaField = ({ name, value, label, onChange }) => (
    <div className={`mt-[20px] relative ${style.InputCont}`}>
        <textarea
            value={value}
            onChange={onChange}
            name={name}
            rows="2"
            className={`relative w-full pl-[10px] pb-[10px] pt-[20px] bg-transparent border-b-[2px] border-teal-400 text-gray-200 focus:outline-none focus:ring-teal-400 ${style.Inputs}`}
        ></textarea>
        <label
            className={`transition-all pointer-events-none absolute left-3 text-[#e7e7e7] ${value ? "top-[5px] text-[10px]" : "top-4"}`}
        >
            {label}
        </label>
    </div>
);

TextareaField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TextareaField;