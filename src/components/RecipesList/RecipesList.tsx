import { ResipeCard } from '..';
import { ListContainer, NextItemsButton, NoRecipesLabel, SearchResults } from '.';

function RecipesList() {
    return (
        <SearchResults>
            <NoRecipesLabel>No recipes found yet! Use filters above or search recipes</NoRecipesLabel>
            <ListContainer>
                <ResipeCard />
            </ListContainer>
            <NextItemsButton> Show more</NextItemsButton>
        </SearchResults>
    );
}

export default RecipesList;
