import { useState, useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';

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
                                <a className="button down" href="/about">About us</a>
                            </li>
                            <br />
                            <li>
                            <a className="button down" href="/contacts">Contact us</a>
                            </li>
                            <br />
                            <li>
                                <a className="button down" href="/our-products">Our Products</a>
                            </li>
                        </ul>
                        
                    </div>
                    
                </section>
            

        </section>


    );
}
export default Dashboard;