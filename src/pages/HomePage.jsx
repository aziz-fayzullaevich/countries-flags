import React from 'react';
import Card from '../components/card/Card';
import List from '../components/list/List';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ filteredCountries }) => {
    const navigate = useNavigate();

    return (
        <List>
            {filteredCountries.length === 0 && <div>No countries to display</div>}
            {filteredCountries.map(card => {
                const countryInfo = {
                    img: card.flags.png,
                    name: card.name.common,
                    info: [
                        {
                            title: 'Population',
                            description: card.population.toLocaleString(),
                        },
                        {
                            title: 'Region',
                            description: card.region,
                        },
                        {
                            title: 'Capital',
                            description: Array.isArray(card.capital) ? card.capital.join(', ') : 'No capital available',
                        },
                    ],
                };
                return (
                    <Card
                        key={card.name.common}
                        {...countryInfo}
                        onClick={() => {
                            navigate(`/country/${card.name.common}`);
                        }}
                    />
                );
            })}
        </List>
    );
}

export default HomePage;