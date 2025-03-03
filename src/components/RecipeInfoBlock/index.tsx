import styled from 'styled-components';

import ImageLoader from '@/components/ImageLoader/ImageLoader';
import styles from '@/constants/styles';
import { flexContainer } from '@/styles/mixins/centerItem';
import { typography } from '@/styles/mixins/typography';

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 1280px;
    align-items: center;
    margin: ${({ theme }) => theme.margin.XXL} ${({ theme }) => theme.margin.auto};
    gap: 32px;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }

    @media (max-width: 1150px) {
        flex-direction: column-reverse;
    }

    @media ${(props) => props.theme.media.tablet} {
        margin: ${({ theme }) => theme.margin.XL} ${({ theme }) => theme.margin.auto};
    }
`;

export const RecipeBox = styled.div`
    width: 760px;
    background-color: ${({ theme }) => theme.colors.main_opacity_color};
    border-radius: 28px;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.padding.XL};

    @media ${(props) => props.theme.media.tablet} {
        width: 90%;
    }
    @media ${(props) => props.theme.media.phone} {
        padding: ${({ theme }) => theme.padding.S} ${({ theme }) => theme.padding.XXS};
    }
`;

export const ResultImage = styled(ImageLoader)`
    width: 520px;
    border-radius: 0 28px 28px 0;

    @media (max-width: 1150px) {
        border-radius: 28px 28px 0 0;
    }

    @media ${(props) => props.theme.media.tablet} {
        border-radius: 28px;
        margin-bottom: 20px;
        width: 90%;
    }
`;

export const MealType = styled.h4`
    ${typography({ size: 13, spacing: 1, family: 'Poppins', color: styles.GOLDEN })}
`;

export const RecipeName = styled.h2`
    ${typography({
        weight: 'normal',
        size: 40,
        family: 'Playfair_Display',
    })}
    color:${({ theme }) => theme.colors.second_text_color};
    margin-bottom: ${({ theme }) => theme.margin.SM};
`;

export const GeneralInfo = styled.p`
    ${typography({
        size: 16,
        family: 'Poppins',
    })}
    color: ${({ theme }) => theme.colors.second_text_color};
    margin-top: ${({ theme }) => theme.margin.XXXS};
    display: inline-block;
    margin-right: ${({ theme }) => theme.margin.M};
    position: relative;
    line-height: 1;
    padding-left: ${({ theme }) => theme.padding.S};
`;

export const GeneralInfoIcon = styled.img`
    position: absolute;
    margin-left: -${({ theme }) => theme.margin.XXXS};
    height: 17px;
`;

export const IngredientsList = styled.ul`
    margin-top: ${({ theme }) => theme.margin.XS};
    background: linear-gradient(90deg, rgba(217, 217, 217, 0) 23.93%, rgba(217, 217, 217, 0.1) 100%);
    border-radius: 20px;
    box-sizing: border-box;
    padding: ${({ theme }) => theme.padding.S} 0;
    list-style: none;

    @media ${(props) => props.theme.media.tablet} {
        background: none;
    }
`;

export const ProductsLabel = styled.h3`
    ${typography({
        size: 24,
        family: 'Playfair_Display',
    })}
    color: ${({ theme }) => theme.colors.second_text_color};
    margin: ${({ theme }) => theme.margin.SM} 0;

    @media ${(props) => props.theme.media.phone} {
        ${flexContainer({ display: 'none' })}
    }
`;

export const ProductsBlock = styled.div`
    ${flexContainer({ flexWrap: 'wrap', justifyContent: 'space-between' })}
    width: 100%;

    @media ${(props) => props.theme.media.phone} {
        ${flexContainer({ display: 'none' })}
    }
`;

export const ProductImage = styled(ImageLoader)`
    width: 163px;
    height: 163px;
    border-radius: 20px;
    margin-bottom: ${({ theme }) => theme.margin.XXXS};
`;

export const IngredientsLabel = styled.h3`
    ${typography({
        size: 24,
        family: 'Playfair_Display',
    })}
    color: ${({ theme }) => theme.colors.second_text_color};
`;

export const IngredientItem = styled.li`
    ${typography({
        size: 16,
        family: 'Poppins',
    })}
    color: ${({ theme }) => theme.colors.second_text_color};
    margin: ${({ theme }) => theme.margin.XSM} 0;
    position: relative;
    padding-left: ${({ theme }) => theme.padding.M};

    &:before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #a2a8ba;
        margin-left: -${({ theme }) => theme.margin.XS};
    }

    @media ${(props) => props.theme.media.phone} {
        ${typography({
            size: 12,
        })}
        padding-left: ${({ theme }) => theme.padding.S};

        &:before {
            width: 12px;
            height: 12px;
            margin-left: -20px;
        }
    }
`;

export const IngredientImage = styled(ProductImage)`
    margin-top: ${({ theme }) => theme.margin.XSM};
    margin-left: -${({ theme }) => theme.margin.XXXS};
    display: none;

    @media ${(props) => props.theme.media.phone} {
        display: block;
    }
`;

export const RecipeLink = styled.a`
    ${typography({
        size: 24,
        weight: 'bold',
        decoration: 'none',
        family: 'Playfair_Display',
    })}
    color: ${({ theme }) => theme.colors.second_text_color};
    display: block;
    margin: ${({ theme }) => theme.margin.LM} 0 ${({ theme }) => theme.margin.XXXS};

    @media ${(props) => props.theme.media.phone} {
        margin-top: ${({ theme }) => theme.margin.XS};
    }
`;
