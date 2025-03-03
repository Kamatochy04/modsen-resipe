/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { ENV_VARIABLES } from '@/constants/testEnv';
import { RecipeInfo } from '@/types/recipeInfo';
import { RecipeItem } from '@/types/recipeItem';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/utils/LocalStorag';

interface TransformedRecipeItem {
    id: string;
    image: string;
    label: string;
    link: string;
}

export function useRecipe() {
    const [recipe, setRecipe] = useState<RecipeInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState(false);

    const toggleRecipe = (key: string, recipe: RecipeItem) => {
        const transformedRecipe = _transformRecipeData(recipe);

        const recipeArr = getItemFromLocalStorage(key);

        if (recipeArr === null) {
            const arr = [transformedRecipe];
            setItemToLocalStorage(key, JSON.stringify(arr));
        } else {
            const updatedRecipes = recipeArr.filter((item: TransformedRecipeItem) => item.id !== recipe.id);

            if (updatedRecipes.length === recipeArr.length) {
                updatedRecipes.push(transformedRecipe);
            }

            setItemToLocalStorage(key, JSON.stringify(updatedRecipes));
        }
    };

    const getOnerecipe = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${ENV_VARIABLES.APP_ID}&app_key=${ENV_VARIABLES.APP_KEY}`
            );

            if (!response.ok) {
                throw new Error('Ошибка при получении рецепта');
            }

            const data = await response.json();
            setRecipe(data.recipe);
        } catch (error) {
            setIsError(true);
        } finally {
            setLoading(false);
        }
    };

    const _transformRecipeData = (recipe: RecipeItem): TransformedRecipeItem => {
        return {
            id: recipe.id,
            image: recipe.image,
            label: recipe.label,
            link: recipe.link,
        };
    };

    return {
        toggleRecipe,
        getOnerecipe,
        recipe,
        loading,
        isError,
    };
}
