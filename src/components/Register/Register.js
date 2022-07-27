import { useNavigate, Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        authService.register(email, password)
            .then(authData => { // this is the response actually, we can name it as we wish
                login(authData);
                navigate('/');
            })
    }

    
    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                    <p className="field">
                        <span>If you alredy have a profile click <Link to="/login">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
    
}
export default Register;