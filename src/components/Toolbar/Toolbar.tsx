import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/' className='navbar-brand'>Finance Tracker</NavLink>
            <NavLink to='/categories' className='navbar-brand'>Categories</NavLink>
            <NavLink to='/newTransaction' className='navbar-brand'>Add</NavLink>
        </div>
    );
};

export default Toolbar;