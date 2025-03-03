import { useState } from 'react';

import { RecipeFilter, RecipesList } from '@/components';
import { SearchContext } from '@/hooks/useSearchContext';
import { RecipeListResponse } from '@/types/recipeListResponse';

function HomePage() {
    const [recipesList, setRecipes] = useState<RecipeListResponse>({ recipes: [], next: '' });
    const [isLoading, setLoading] = useState(false);

    const addRecipes = (newRecipes: RecipeListResponse) => {
        setRecipes({ recipes: [...recipesList.recipes, ...newRecipes.recipes], next: newRecipes.next });
    };

    return (
        <SearchContext.Provider value={{ recipesList, isLoading, setRecipes, addRecipes, setLoading }}>
            <RecipeFilter />
            <RecipesList />
        </SearchContext.Provider>
    );
}

export default HomePage;
