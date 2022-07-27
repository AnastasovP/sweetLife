

const OurProducts = () => {

    return (
        <div>
            <ul className="products">

                <li className="otherRecipe">
                    <h3>Name: Garash Cake</h3>
                    <p>Category: Cake</p>
                    <p>Pieces: 12</p>
                    <p>Calories per piece: 350</p>
                    <span>
                        Brief description: This is the original recipe for Garash cake,
                        introduced by Hungarian confectioner Kosta Garash. It was first served in
                        the town of Ruse and unveiled in Sofia in 1960. It consists of 5 egg white
                        layers, smeared with chocolate mousse made of cream and chocolate.
                    </span>
                    <p className="img"><img src="/images/garash.png" alt="garashCake" /></p>
                    <p><i>Price: 75 BGN</i></p>
                </li>
                <p>&nbsp;</p>
                <li className="otherRecipe">
                    <h3>Name: Carrot Cake</h3>
                    <p>Category: Cake</p>
                    <p>Pieces: 14</p>
                    <p>Calories per piece: 270</p>
                    <span>
                        Brief description: Deeply moist and filled with toasted pecans. Most of its flavor
                        comes from brown sugar, cinnamon, ginger, nutmeg, and carrots.
                        Ginger adds the most delicious zing!
                    </span>
                    <p className="img"><img src="/images/carrotCake.jpg" alt="carrotCake" /></p>
                    <p><i>Price: 60 BGN</i></p>
                </li>
                <p>&nbsp;</p>
                <li className="otherRecipe">
                    <h3>Name: Fruit Cake</h3>
                    <p>Category: Cake</p>
                    <p>Pieces: 16</p>
                    <p>Calories per piece: 190</p>
                    <span>
                        Brief description: The earliest recipe from ancient Rome!
                        The cake incorporates a large quantity of mixed fruits and rum/wine
                    </span>
                    <p className="img"><img src="/images/fruitCake.jpg" alt="fruitCake" /></p>
                    <p><i>Price: 55 BGN</i></p>
                </li>
                <p>&nbsp;</p>
                <li className="otherRecipe">
                    <h3>Name: Apple Pie</h3>
                    <p>Category: Pie</p>
                    <p>Pieces: 18</p>
                    <p>Calories per piece: 165</p>
                    <span>
                        Brief description: The classic American Apple Pie recipe! Easy, flavorful with a crisp crust and a generous filling of tender, cinnamon-flavored apples.
                        The perfect way to start the day!
                    </span>
                    <p className="img"><img src="/images/applePie.jpg" alt="applePie" /></p>
                    <p><i>Price: 43 BGN</i></p>
                </li>
                <p>&nbsp;</p>
                <li className="otherRecipe">
                    <h3>Name: Cookies</h3>
                    <p>Category: Cookie</p>
                    <p>Pieces: 1</p>
                    <p>Calories per piece: 53</p>
                    <span>
                        Brief description: With their buttery, sweet flavor and crispy around the edges and chewy on the inside
                        texture, it's no surprise why everyone loves classic chocolate chip cookies.
                    </span>
                    <p className="img"><img src="/images/cookies.jpg" alt="cookies" /></p>
                    <p><i>Price: 2 BGN</i></p>
                </li>
                <p>&nbsp;</p>
                <li className="otherRecipe">
                    <h3>Name: Muffins</h3>
                    <p>Category: Muffin</p>
                    <p>Pieces: 1</p>
                    <p>Calories per piece: 75</p>
                    <span>
                        Brief description:Nuttela stuffed double chocolate muffins.
                        Deliciously moist and fluffy chocolate muffins that are studded with chocolate chips
                    </span>
                    <p className="img"><img src="/images/muffins.jpg" alt="muffins" /></p>
                    <p><i>Price: 2 BGN</i></p>
                </li>
                
            </ul>
        </div>
    );

};
export default OurProducts;