import React, { useEffect, useState } from 'react';
import ts from './Title.module.css';
import Search from './search/Search';
import CustomSelect from './select-regions/Select';

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
];

const Title = ({ theme, onSearch }) => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState(null);

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
    }, [search, region, onSearch]);

    return (
        <div className={ts.mainBlock}>
            <div className="container">
                <div className={ts.innerMainBlock}>
                    <Search theme={theme} search={search} setSearch={setSearch} />
                    <CustomSelect
                        options={options}
                        placeholder="Фильтр по регионам"
                        value={region}
                        onChange={setRegion}
                    />
                </div>
            </div>
        </div>
    );
};

export default Title;
