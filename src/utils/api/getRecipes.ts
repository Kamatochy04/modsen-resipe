import { ENV_VARIABLES } from '@/constants/testEnv';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { getRecipesByLink } from './getRecipesByLink';

function buildRequestUri(query: string, diet: DietTypes, dishType: DishTypes): string {
    const { API_URI, APP_ID, APP_KEY } = ENV_VARIABLES;
    const baseUri = `${API_URI}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const queryParams = [
        query && `q=${encodeURI(query)}`,
        diet !== DietTypes.Any && `diet=${encodeURI(diet).toLowerCase()}`,
        dishType !== DishTypes.Any && `dishType=${encodeURI(dishType)}`,
        `field=image&field=label&field=externalId`,
    ]
        .filter(Boolean)
        .join('&');

    return `${baseUri}&${queryParams}`;
}

export async function fetchRecipes(query: string, diet: DietTypes, dishType: DishTypes) {
    const requestUri = buildRequestUri(query, diet, dishType);
    return getRecipesByLink(requestUri);
}

export default fetchRecipes;
