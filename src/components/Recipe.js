import React from "react";
import style from "./Recipe.module.css";
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

function Recipe({ recipe }) {
    var calories = recipe.recipe.calories;
    if (!Number.isNaN(calories)) {
        calories = calories.toFixed(2);
    }

    function onClickRightBtn(e) {
        window.open(recipe.recipe.url, '_blank');
    }

    return (
        <div className={style.recipe}>
            
            <div className={style.header}>
                <div className={style.headerLeft}>
                    <p className={style.title}>{recipe.recipe.label}</p>
                    <p className={style.calories}>Calories: {calories}</p>
                </div>
                <div className={style.headerRight} onClick={onClickRightBtn}>
                    <ArrowForwardIosRoundedIcon fontSize="large" />
                </div>
            </div>
            
            <img className={style.image} src={recipe.recipe.image} alt="" />
            <ul>
                {recipe.recipe.ingredients.map((ing, idx) => {
                    if (idx < 5) {
                        return (<li key={idx}>{ing.text}</li>);
                    }
                    if (idx === 5) {
                        return (<li key="...">... ...</li>);
                    }
                    return null;
                })}
            </ul>
            
        </div>
    );
}

export default Recipe;
