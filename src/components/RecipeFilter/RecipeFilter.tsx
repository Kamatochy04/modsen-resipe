import { Formik } from 'formik';

import SearchIcon from '@/assets/svg/searchIcon.svg';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { TypeSelect } from '..';
import { ErrorMessage, FilterOptions, FormTitle, SearchButton, SearchField, SearchInputWrapper } from '.';
import { validationSchema } from './validation';

function RecipeSearchForm() {
    return (
        <Formik
            initialValues={{
                dish: '',
                diet: '',
                query: '',
            }}
            validationSchema={validationSchema}
            onSubmit={() => {}}
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
    );
}

export default RecipeSearchForm;
