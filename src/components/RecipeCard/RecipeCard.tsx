import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeartActiveIcon, HeartIcon } from '@/assets/icon/HeartIcon';
import { MarkActiveIcon, MarkIcon } from '@/assets/icon/MarkIcon';
import { useRecipe } from '@/hooks/useRecipe';
import { RecipeItem } from '@/types/recipeItem';
import { paths } from '@/utils/navigates/paths';

import { ItemFooter, ItemImage, ItemLabel, ListItem } from '.';

type RecipeCardProps = {
    removeFromFavorite?: (id: string) => void;
    removeFromCooked?: (id: string) => void;
    recipe: RecipeItem;
    isCooked?: boolean;
    isFavorite?: boolean;
};

function RecipeCard({
    recipe,
    removeFromFavorite,
    removeFromCooked,
    isCooked: initialIsCooked,
    isFavorite: initialIsFavorite,
}: RecipeCardProps) {
    const { toggleRecipe } = useRecipe();
    const navigate = useNavigate();

    const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
    const [isCooked, setIsCooked] = useState(initialIsCooked);

    const handleIconClick = (e: React.MouseEvent, key: string) => {
        e.stopPropagation();

        if (key === 'favorite') {
            setIsFavorite((prev) => !prev);
            toggleRecipe(key, recipe);
            if (removeFromFavorite && !isFavorite) {
                removeFromFavorite(recipe.id);
            }
        } else if (key === 'cooked') {
            setIsCooked((prev) => !prev);
            toggleRecipe(key, recipe);
            if (removeFromCooked && !isCooked) {
                removeFromCooked(recipe.id);
            }
        }
    };

    const handleCardClick = () => {
        navigate(`${paths.recipe}/${recipe.id}`);
    };

    return (
        <ListItem key={recipe.id} onClick={handleCardClick}>
            <ItemImage src={recipe.image} />
            <ItemLabel>{recipe.label}</ItemLabel>
            <ItemFooter>
                <div onClick={(e: React.MouseEvent) => handleIconClick(e, 'favorite')}>
                    {isFavorite ? <HeartActiveIcon /> : <HeartIcon />}
                </div>

                <div onClick={(e: React.MouseEvent) => handleIconClick(e, 'cooked')}>
                    {isCooked ? <MarkActiveIcon /> : <MarkIcon />}
                </div>
            </ItemFooter>
        </ListItem>
    );
}

export default RecipeCard;
