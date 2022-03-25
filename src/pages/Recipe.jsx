import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Recipe() {

    const [recipe, setRecipe] = useState([]);
    let params = useParams();

    const getRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        console.log(recipes);
        setRecipe(recipes);
    };
    useEffect(() => {
        getRecipe(params.id);

    },[params.id]);
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.name}/>
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default Recipe