import { RecipeInfoBlock } from '@/components';
import { Errorpage, FavoriteRecipes, HomePage } from '@/pages';

import { paths } from './paths';

export const routes = [
    {
        path: paths.home_page,
        component: <HomePage />,
        index: true,
    },
    {
        path: paths.coockedRecipe,
        component: <FavoriteRecipes />,
    },
    {
        path: `${paths.recipe}/:id`,
        component: <RecipeInfoBlock />,
    },
    {
        path: paths.all,
        component: <Errorpage />,
    },
];
