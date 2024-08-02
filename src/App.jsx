import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/header/Header';
import Title from './components/title/Title';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NoPage from './pages/NoPage';
import axios from 'axios';
import { ALL_COUNTRIES } from './config';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleSearch = useCallback((search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(el => el.region.includes(region));
    }

    if (search) {
      data = data.filter(el => el.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  }, [countries]);

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
        setFilteredCountries(data);
      }).catch(error => {
        console.error("Ошибка при загрузке стран:", error);
      });
    }
  }, [countries.length]);

  return (
    <>
      <Header />
      <Title onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} filteredCountries={filteredCountries} />} />
        <Route path="/country/:name" element={<Details />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </>
  );
};

export default App;
