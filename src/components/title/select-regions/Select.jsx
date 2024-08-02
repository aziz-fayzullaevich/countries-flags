import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ options, value, onChange, placeholder }) => {
    return (
        <Select
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isClearable
            styles={{
                control: (provided, state) => ({
                    ...provided,
                    backgroundColor: 'var(--colors-ui-base)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '5px',
                    boxShadow: state.isFocused ? '0 0 0 1px var(--border-color)' : 'none',
                    padding: '5px',
                    minHeight: '40px',
                }),
                option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? 'var(--option-selected-bg)' : 'var(--colors-ui-base)',
                    color: 'var(--color-text)',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'var(--option-hover-bg)',
                    },
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'var(--color-text)',
                }),
                dropdownIndicator: (provided) => ({
                    ...provided,
                    color: 'var(--color-text)',
                }),
                clearIndicator: (provided) => ({
                    ...provided,
                    color: 'var(--color-text)',
                }),
                indicatorSeparator: (provided) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                }),
                menu: (provided) => ({
                    ...provided,
                    backgroundColor: 'var(--colors-ui-base)',
                    borderRadius: '5px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                }),
                menuList: (provided) => ({
                    ...provided,
                    padding: '0',
                }),
                placeholder: (provided) => ({
                    ...provided,
                    color: 'var(--color-text)',
                }),
            }}
        />
    );
};

export default CustomSelect;