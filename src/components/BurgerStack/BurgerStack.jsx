// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    return (
    <ul>
      { props.ingredients.length === 0 ? <li>No ingredients selected yet</li> : null }
      {props.ingredients.map((ingredient, index) => {
                return (
                  <li 
                      key={index} 
                      onClick={() => props.removeIngredient(ingredient)} 
                      style={{backgroundColor: ingredient.color}}
                  >
                      {ingredient.name}
                  </li>
              );      })}
      <button onClick={props.clearBurger}>Clear</button>
    </ul>
  )
  };
  
  export default BurgerStack;
  