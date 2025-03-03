import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    diet: yup.string(),
    dish: yup.string(),
    query: yup
        .string()
        .when(['dish', 'diet'], ([dish, diet], schema) => {
            return dish || diet ? schema : schema.required('Search hint, dish type or diet type must be specified!');
        })
        .min(5, 'Search hint must be 5 symbols!')
        .max(50, 'Search hint must be shorter than 50 symbols!'),
});
