import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import caloriesIcon from '@/assets/svg/caloriesIcon.svg';
import cuisineIcon from '@/assets/svg/cuisineIcon.svg';
import { useRecipe } from '@/hooks/useRecipe';
import { makeFirstUppercaseString } from '@/utils/makeFirstLetterUppercase';

import Loader from '../Loader/Loader';
import {
    GeneralInfo,
    GeneralInfoIcon,
    InfoContainer,
    IngredientImage,
    IngredientItem,
    IngredientsLabel,
    IngredientsList,
    MealType,
    ProductImage,
    ProductsBlock,
    ProductsLabel,
    RecipeBox,
    RecipeLink,
    RecipeName,
    ResultImage,
} from '.';

function RecipeInfoBlock() {
    const { recipe, getOnerecipe } = useRecipe();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getOnerecipe(id);
        }
    }, []);

    if (!recipe) {
        return <Loader />;
    }

    return (
        <InfoContainer>
            <RecipeBox>
                <MealType>
                    Meal type:
                    {recipe.mealType.join(', ')}
                </MealType>
                <RecipeName>{recipe.label}</RecipeName>
                <GeneralInfo>
                    <GeneralInfoIcon src={caloriesIcon} />
                    {Math.round(recipe.calories)} calories
                </GeneralInfo>
                <GeneralInfo>
                    <GeneralInfoIcon src={cuisineIcon} />
                    Cuisine - {makeFirstUppercaseString(recipe.cuisineType)}
                </GeneralInfo>
                <IngredientsList>
                    <IngredientsLabel>Ingredients</IngredientsLabel>
                    {recipe.ingredients.map((ingredient) => (
                        <IngredientItem key={ingredient.foodId}>
                            {ingredient.text}
                            <IngredientImage src={ingredient.image} />
                        </IngredientItem>
                    ))}
                </IngredientsList>

                <ProductsLabel>Products</ProductsLabel>
                <ProductsBlock>
                    {recipe.ingredients.map((ingredient) => (
                        <ProductImage key={ingredient.foodId} src={ingredient.image} />
                    ))}
                </ProductsBlock>
                <RecipeLink>Recipe link</RecipeLink>
            </RecipeBox>
            <ResultImage src={recipe.image} />
        </InfoContainer>
    );
}

export default RecipeInfoBlock;
