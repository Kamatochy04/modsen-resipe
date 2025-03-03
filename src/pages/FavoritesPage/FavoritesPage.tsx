import { useEffect, useState } from 'react';

import { EmptyIcon } from '@/assets/icon/EmptyIcon';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import { RecipeItem } from '@/types/recipeItem';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/utils/LocalStorag';

import { FlexWrapper, ListContainer, Title, Typography, Wrapper } from '.';

function FavoriteRecipes() {
    const [favorite, setFavorite] = useState<RecipeItem[]>([]);
    const [cooked, setCooked] = useState<RecipeItem[]>([]);

    useEffect(() => {
        const fav = getItemFromLocalStorage('favorite');
        const cookedItems = getItemFromLocalStorage('cooked');
        setFavorite(fav || []);
        setCooked(cookedItems || []);
    }, []);

    const removeFromFavorite = (id: string) => {
        const updatedFavorites = favorite.filter((item) => item.id !== id);
        setFavorite(updatedFavorites);
        setItemToLocalStorage('favorite', JSON.stringify(updatedFavorites));
    };

    const removeFromCooked = (id: string) => {
        const updatedCooked = cooked.filter((item) => item.id !== id);
        setCooked(updatedCooked);
        setItemToLocalStorage('cooked', JSON.stringify(updatedCooked));
    };

    return (
        <Wrapper>
            <div>
                <Title>Favorites dishes</Title>

                <FlexWrapper>
                    {favorite.length === 0 ? (
                        <>
                            <Typography>Empty</Typography>
                            <EmptyIcon />
                        </>
                    ) : (
                        <ListContainer>
                            {favorite.map((item: RecipeItem, id) => (
                                <RecipeCard
                                    key={id}
                                    recipe={item}
                                    removeFromFavorite={removeFromFavorite}
                                    removeFromCooked={removeFromCooked}
                                />
                            ))}
                        </ListContainer>
                    )}
                </FlexWrapper>
            </div>

            <div>
                <Title>Cooked dishes</Title>
                <FlexWrapper>
                    {cooked.length === 0 ? (
                        <>
                            <Typography>Empty</Typography>
                            <EmptyIcon />
                        </>
                    ) : (
                        <ListContainer>
                            {cooked.map((item: RecipeItem, id) => (
                                <RecipeCard
                                    key={id}
                                    recipe={item}
                                    removeFromFavorite={removeFromFavorite}
                                    removeFromCooked={removeFromCooked}
                                />
                            ))}
                        </ListContainer>
                    )}
                </FlexWrapper>
            </div>
        </Wrapper>
    );
}

export default FavoriteRecipes;
