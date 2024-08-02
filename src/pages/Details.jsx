import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { searchCountry } from '../config';
import Info from '../components/info/Info';

const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios.get(searchCountry(name)).then(({ data }) => {
            if (Array.isArray(data) && data.length > 0) {
                setCountry(data[0]);
            }
        }).catch(error => {
            console.error("Ошибка при загрузке данных страны:", error);
        });
    }, [name]);

    return (
        <div className='container'>
            <button onClick={() => navigate(-1)}
                style={{
                    boxShadow: '0 0 12px -3px rgba(0, 0, 0, 0.4)',
                    padding: '2px 10px',
                    borderRadius: '5px',
                    color: 'var(--color-text)',
                    backgroundColor: 'var(--colors-ui-base)',
                }}>
                <IoArrowBack /> Back
            </button>
            {country && <Info {...country} navigate={navigate} />}
        </div>
    );
};

export default Details;