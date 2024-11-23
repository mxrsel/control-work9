import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='container mt-3'>
        <div className='navbar bg-dark p-2' style={{borderRadius: '10px'}}>
            <NavLink to='/' className='navbar-brand text-light'>Finance Tracker</NavLink>
            <div>
            <NavLink to='/categories' className='nav-item me-3 text-decoration-none text-light'>Categories</NavLink>
            <NavLink to='/newTransaction' className='nav-item text-decoration-none text-light'>Add</NavLink>
            </div>
        </div>
        </div>
    );
};

export default Toolbar;