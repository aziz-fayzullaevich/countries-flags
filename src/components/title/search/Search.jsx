import ss from './Search.module.css';
import { IoSearch, IoSearchOutline } from "react-icons/io5";

const Search = ({ theme, search, setSearch }) => {
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className={ss.mainBlock}>
            <div className={ss.searchBlock}>
                {theme === 'light' ? <IoSearchOutline /> : <IoSearch />}
                <input
                    type='text'
                    placeholder='Search for a country'
                    onChange={handleChange}
                    value={search}
                />
            </div>
        </div>
    );
}

export default Search;
