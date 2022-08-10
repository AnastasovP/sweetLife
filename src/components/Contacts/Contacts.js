import { Link } from 'react-router-dom';

const Contacts = () => {

    return (
        <section className="contacts">

            <h3 >Contact Details:</h3>

            <label>Adress:</label>
            <p>34 Ivan Vazov str.</p>
            <label>Phone:</label>
            <p>+359 888 919 745</p>
            <label>E-mail:</label>
            <p><Link to="/email">sweetlife@abv.bg</Link></p>

        </section>
    );


};
export default Contacts