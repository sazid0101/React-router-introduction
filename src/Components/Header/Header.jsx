import {Link, NavLink} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div>
            
            <div className={'header'}>
                <Link to={'/'}>Home</Link>
                <NavLink to='/users'>Users</NavLink>
                
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact Us</NavLink>
                <NavLink to={'/albums'}>Albums</NavLink>
            </div>
        </div>
    );
};

export default Header;