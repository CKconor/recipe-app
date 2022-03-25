import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Recipe() {

    const [recipe, setRecipe] = useState([]);
    let params = useParams();

    const getRecipe = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipes = await data.json();
        setRecipe(recipes.results);
        console.log(recipe);
    };
    useEffect(() => {
        getRecipe(params.id);
    },[params.id]);
  return (
    <div><h1>Testing</h1><h1>{recipe.title}</h1></div>
  )
}

export default Recipe