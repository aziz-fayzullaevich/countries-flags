import { useEffect, useState } from 'react';
import hs from './Header.module.css';
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);

    return (
        <header>
            <div className="container">
                <div className={hs.innerHeader}>
                    <div className={hs.title}>
                        <Link to="/">Countries Flags</Link>
                    </div>
                    <div className={hs.themesBlogs} onClick={toggleTheme}>
                        {theme === 'light' ? < IoMoonOutline /> : <IoMoon />}
                        <p>{theme} Mode</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;