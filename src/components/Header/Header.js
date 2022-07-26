import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const { user } = useAuthContext();
    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="register">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="email">
            <span>Welcome, {user.email} </span>
            <Link className="button" to="/my-recipes">My Sweets</Link>
            <Link className="button" to="/create">Create recipe</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );


    return (
        <header id="site-header">

            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {user.email
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;