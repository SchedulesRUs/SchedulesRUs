"use client";

import { useState, useEffect } from "react";

export default function scheduleData({idMeal} ) {
    async function fetchMealIdeas(idMeal) {
        const [ingredientArray, setIngredientArray] = useState([]);
        const [isError, setErrorStatus] = useState(true);

        try {
          const response = await fetch(
            `www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
          );
          const data = await response.json();
          console.log("test", data);
          console.dir(data.meals);
          setIngredientArray(data.meals);
          setErrorStatus(false);
          // return data;
        } catch (error) {
          setErrorStatus(true);
        }
      }
      
  useEffect(() => {
    fetchMealIdeas(idMeal);

    // console.log("test", mealsArray);
  }, [idMeal]);
}