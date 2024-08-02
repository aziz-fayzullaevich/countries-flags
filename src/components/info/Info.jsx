import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ls from './Info.module.css';
import { filterCode } from '../../config';

const Info = (props) => {
    const {
        name = { common: '' },
        nativeName = {},
        flags = { png: '', svg: '', alt: '' },
        capital = [],
        population = '',
        region = '',
        subregion = '',
        currencies = {},
        languages = {},
        borders = [],
        navigate,
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if (borders.length) {
            axios.get(filterCode(borders)).then(({ data }) => {
                setNeighbors(data.map(count => count.name.common));
            }).catch(error => {
                console.error("Ошибка при загрузке граничащих стран:", error);
            });
        }
    }, [borders]);

    return (
        <div className={ls.mainInfoBlock}>
            <div className="container">
                <div className={ls.innerBlock}>
                    {flags.png && (
                        <img
                            src={flags.png}
                            alt={flags.alt || name.common || 'Flag'}
                            className={ls.img}
                        />
                    )}

                    <div>
                        {name.common && <h1>{name.common}</h1>}
                        <div className={ls.listGroup}>
                            <ul className={ls.listItems}>
                                {Object.values(nativeName).length > 0 && (
                                    <li className={ls.listItem}>
                                        <b>Native Names:</b>
                                        {Object.entries(nativeName).map(([key, lang]) => (
                                            <span key={key}>{lang.official}</span>
                                        ))}
                                    </li>
                                )}
                                {population && (
                                    <li className={ls.listItem}>
                                        <b>Population:</b> {population.toLocaleString()}
                                    </li>
                                )}
                                {region && (
                                    <li className={ls.listItem}>
                                        <b>Region:</b> {region}
                                    </li>
                                )}
                                {subregion && (
                                    <li className={ls.listItem}>
                                        <b>Sub Region:</b> {subregion}
                                    </li>
                                )}
                                {capital.length > 0 && (
                                    <li className={ls.listItem}>
                                        <b>Capital:</b> {capital.join(', ')}
                                    </li>
                                )}
                            </ul>

                            <ul className={ls.listItems}>
                                {Object.keys(currencies).length > 0 && (
                                    <li className={ls.listItem}>
                                        <b>Currencies: </b>
                                        {Object.entries(currencies).map(([code, { name }]) => (
                                            <span key={code}>{name}</span>
                                        ))}
                                    </li>
                                )}
                                {Object.keys(languages).length > 0 && (
                                    <li className={ls.listItem}>
                                        <b>Languages: </b>
                                        {Object.entries(languages).map(([code, lang]) => (
                                            <span key={code}>{lang}</span>
                                        ))}
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className={ls.meta}>
                            <b>Border Countries:</b>
                            {!neighbors.length ? (
                                <span>There are no border countries</span>
                            ) : (
                                <div className={ls.tagGroup}>
                                    {neighbors.map((border) => (
                                        <span key={border} onClick={() => navigate(`/country/${border}`)}>
                                            {border}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;