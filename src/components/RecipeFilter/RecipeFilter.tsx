import { Formik } from 'formik';
import { useState } from 'react';

import SearchIcon from '@/assets/svg/searchIcon.svg';
import { FilterContext } from '@/hooks/useFilterContext';
import { useSearchContext } from '@/hooks/useSearchContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';
import getRecipes from '@/utils/api/getRecipes';

import { TypeSelect } from '..';
import { ErrorMessage, FilterOptions, FormTitle, SearchButton, SearchField, SearchInputWrapper } from '.';
import { validationSchema } from './validation';

function RecipeSearchForm() {
    const { setRecipes, setLoading } = useSearchContext();
    const [diet, setDiet] = useState(DietTypes.Any);
    const [dish, setDish] = useState(DishTypes.Any);

    const handleSubmit = (values: { query: string }) => {
        setLoading(true);
        getRecipes(values.query, diet, dish)
            .then((recipesList) => setRecipes(recipesList))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <FilterContext.Provider value={{ diet, dish, setDiet, setDish }}>
            <Formik
                initialValues={{
                    dish: '',
                    diet: '',
                    query: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, handleChange, setFieldValue, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <FormTitle>{'Discover Recipe & Delicious Food'}</FormTitle>
                        <SearchInputWrapper>
                            <SearchField
                                name="query"
                                type="text"
                                value={values.query}
                                onChange={handleChange}
                                placeholder={'Search Your Favorite Food'}
                            />
                            <SearchButton type="submit">
                                <img src={SearchIcon} alt="Search" />
                            </SearchButton>
                            <ErrorMessage>{errors.query}</ErrorMessage>
                        </SearchInputWrapper>
                        <FilterOptions>
                            <TypeSelect setFieldValue={setFieldValue} value={values.dish} type={DishTypes} />
                            <TypeSelect setFieldValue={setFieldValue} value={values.diet} type={DietTypes} />
                        </FilterOptions>
                    </form>
                )}
            </Formik>
        </FilterContext.Provider>
    );
}

export default RecipeSearchForm;
