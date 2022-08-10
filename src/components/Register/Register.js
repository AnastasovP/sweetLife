import { useNavigate, Link } from 'react-router-dom';

import { useNotificationContext } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';

import { useAuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        let { email, password, confirmPass } = Object.fromEntries(new FormData(e.currentTarget));
        if (password !== confirmPass) {
            addNotification('Passwords don\'t match!');
            return;
        }
        authService.register(email, password)
            .then(authData => {
                login(authData);
                navigate('/');
            })
            .catch(err => {
                console.log(err)
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
                            <input type="password" name="confirmPass" id="repeat-pass" placeholder="Repeat Password" />
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