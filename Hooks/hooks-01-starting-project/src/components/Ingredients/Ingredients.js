import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';

function Ingredients() {
  const [ingredients, setUserIngredients] = useState([]);
useEffect(() => {
  
  fetch('url').then(
    response => response.json()
  ).then(responseData => {
    const loadedIngredients = [];
    for(const key in responseData) {
      loadedIngredients.push({
        id: key,
        title: responseData[key].title,
        amount: responseData[key].amount,
      });
    }
    setUserIngredients(loadedIngredients);
  }, [])
})
  fetch('url', {
    method: 'POST',
    body: JSON.stringify({ingredient}),
    headers: {'Content-Type': 'application/json' },

  }).then(response => {
    return response.json();
    
  }).then(responseData => {
    setUserIngredients(prevIngredients => [...prevIngredients, {
      id: Math.random().toString(), ...ingredient }
    }]);
  })
  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => [...prevIngredients, {
      id: Math.random().toString(), ...ingredient }
    }]);
  }

  const removeIngredientHandler = ingredientId => {
    setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId));
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient = {addIngredientHandler} />

      <section>
        <Search />
        <IngredientList />
      </section>
    </div>
  );
}

export default Ingredients;
