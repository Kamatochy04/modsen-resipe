import { useSearchContext } from '@/hooks/useSearchContext';
import { getRecipesByLink } from '@/utils/api/getRecipesByLink';

import { ResipeCard } from '..';
import Loader from '../Loader/Loader';
import { ListContainer, NextItemsButton, NoRecipesLabel, ResultsLabel, SearchResults } from '.';

function RecipesList() {
    const { recipesList, addRecipes } = useSearchContext();

    const { isLoading, setLoading } = useSearchContext();

    const showNextRecipes = () => {
        setLoading(true);
        getRecipesByLink(recipesList.next)
            .then((recipes) => addRecipes(recipes))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <SearchResults>
            {recipesList.recipes.length === 0 ? (
                isLoading ? (
                    <Loader />
                ) : (
                    <NoRecipesLabel>No recipes found yet! Use filters above or search recipes</NoRecipesLabel>
                )
            ) : (
                <ResultsLabel>Founded dishes</ResultsLabel>
            )}
            <ListContainer>
                {recipesList.recipes.map((recipe) => {
                    return <ResipeCard recipe={recipe} key={recipe.id} />;
                })}
            </ListContainer>
            {recipesList.next &&
                (isLoading ? <Loader /> : <NextItemsButton onClick={showNextRecipes}> Show more</NextItemsButton>)}
        </SearchResults>
    );
}

export default RecipesList;
