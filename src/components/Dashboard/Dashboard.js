import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import * as recipeService from '../../services/recipeService';
import RecipeList from './RecipeList/RecipeList';
import Contacts from '../Contacts/Contacts'
import About from '../About/About';
import OurProducts from '../OurProducts/OurProducts';
import NotFound from '../404/NotFound';

const Dashboard = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll() 
            .then(result => {
                setRecipes(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []) // never forget the dependancy array!!!!

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Life is sweet</h1>

            <section>
                <Routes>
                    <Route path="/" element={<RecipeList recipes={recipes} />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/our-products" element={<OurProducts />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </section>

            
                <section>
                
                    <div>
                    
                        <ul>
                            <li>
                                <Link className="button down" to="/about">About us</Link>
                            </li>
                            <br />
                            <li>
                                <Link className="button down" to="/contacts">Contact us</Link>
                            </li>
                            <br />
                            <li>
                                <Link className="button down" to="/our-products">Our Products</Link>
                            </li>
                        </ul>
                        
                    </div>
                    
                </section>
            

        </section>


    );
}
export default Dashboard;