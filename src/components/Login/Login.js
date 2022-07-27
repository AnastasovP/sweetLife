import { useNavigate, Link } from 'react-router-dom'; // the new history
import { useAuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';
const Login = () => { // no props anymore, only hooks
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        authService.login(email, password)
            .then((authData) => {
                login(authData);
                navigate('/') // instead of history.push('/')
            })
            .catch(err => {
                //TODO show notification
                console.log(err)
            })

    }

   
    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Login Form</legend>
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
                    <input className="button submit" type="submit" value="Login" />
                    <p className="field">
                        <span>If you don't have a profile click <Link to="/register">here</Link></span>
                    </p>
                </fieldset>
            </form>
        </section>
    );
}
export default Login;