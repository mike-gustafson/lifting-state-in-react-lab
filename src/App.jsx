import React, { useState } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';


const App = () => {
  const allIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [burgerIngredients, setBurgerIngredients] = useState([]); 
  const [availableIngredients, setAvailableIngredients] = useState(allIngredients);

  const addIngredient = (ingredient) => {
    console.log('adding ingredient', ingredient);
    setBurgerIngredients([ingredient, ...burgerIngredients]);
  };

  const clearBurger = () => {
    console.log('clearing burger');
    setBurgerIngredients([]);
  };

  const removeIngredient = (index) => {
    console.log('removing ingredient at index', index);
    const newBurgerIngredients = [...burgerIngredients];
    newBurgerIngredients.splice(index, 1);
    setBurgerIngredients(newBurgerIngredients);
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <div className="container">
      <section>
        <h2>Ingredients</h2>
        <IngredientList ingredients={availableIngredients} addIngredient={addIngredient} />
      </section>
      <section>
        <h2>Burger Stack</h2>
        <BurgerStack ingredients={burgerIngredients} clearBurger={clearBurger} removeIngredient={removeIngredient}/>
      </section>
      </div>
    </main>
  );
};

export default App;

