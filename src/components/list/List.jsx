import ls from './List.module.css';

const List = ({ children }) => {
    return (
        <div className='container'>
            <div className={ls.listBlock}>
                {children}
            </div>
        </div>
    );
}

export default List;