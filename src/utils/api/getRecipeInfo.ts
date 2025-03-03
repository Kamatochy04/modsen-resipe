import axios from 'axios';

import { Ingredient } from '@/types/ingredient';
import { RecipeInfo } from '@/types/recipeInfo';

interface Recipe {
    image: string;
    label: string;
    mealType: string[];
    cuisineType: string[];
    calories: number;
    ingredients: Ingredient[];
}

interface RecipeInfoResponse {
    recipe: Recipe;
    _links: {
        self: {
            href: string;
        };
    };
}

export async function getRecipeInfo(recipeUri: string): Promise<RecipeInfo> {
    try {
        const requestUri = `${recipeUri}&field=image&field=label&field=ingredients&field=calories&field=mealType&field=cuisineType`;
        const response = await axios.get<RecipeInfoResponse>(requestUri);

        const { image, label, mealType, cuisineType, calories, ingredients } = response.data.recipe;

        return new RecipeInfo(
            label,
            image,
            response.data._links.self.href,
            mealType,
            cuisineType,
            calories,
            ingredients
        );
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error('Ошибка при получении информации о рецепте');
    }
}
