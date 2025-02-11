const IngredientList = (props) => {

    return (
        <ul>
            {props.ingredients.map((ingredient, index) => {
                return (
                    <li 
                        key={index} 
                        onClick={() => props.addIngredient(ingredient)} 
                        style={{backgroundColor: ingredient.color}}
                    >
                        {ingredient.name}
                    </li>
                );
            })}
        </ul>
  )};
  
  export default IngredientList;
  