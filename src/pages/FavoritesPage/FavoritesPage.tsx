import RecipeCard from '@/components/RecipeCard/RecipeCard';

import { FlexWrapper, ListContainer, Title, Wrapper } from '.';

function FavoriteRecipes() {
    return (
        <Wrapper>
            <div>
                <Title>Favorites dishes</Title>

                <FlexWrapper>
                    <ListContainer>
                        <RecipeCard />
                    </ListContainer>
                </FlexWrapper>
            </div>

            <div>
                <Title>Cooked dishes</Title>
                <FlexWrapper>
                    <ListContainer>
                        <RecipeCard />
                    </ListContainer>
                </FlexWrapper>
            </div>
        </Wrapper>
    );
}

export default FavoriteRecipes;
