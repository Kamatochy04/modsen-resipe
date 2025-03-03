import styled from 'styled-components';

import styles from '@/constants/styles';
import { typography } from '@/styles/mixins/typography';

export const SearchResults = styled.div`
    width: 1280px;
    margin: ${({ theme }) => theme.margin.XXL} auto;
    font-family: Inter;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }

    @media ${(props) => props.theme.media.tablet} {
        margin: ${({ theme }) => theme.margin.XL} auto;
    }
`;
export const ResultsLabel = styled.h2`
    position: relative;
    color: #000;
    font-size: 40px;
    font-weight: lighter;
    line-height: 0.75;
    padding: ${({ theme }) => `0 ${theme.padding.XXS}`};
    margin: ${({ theme }) => theme.margin.none};

    &:before {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${styles.GOLDEN};
        display: inline-block;
        margin: ${({ theme }) => `0 -${theme.margin.XSM}`};
    }

    @media ${(props) => props.theme.media.phone} {
        font-size: 18px;
        line-height: 1;
        padding: ${({ theme }) => `0 ${theme.padding.S}`};

        &:before {
            margin: ${({ theme }) => `0 -${theme.margin.XSM}`};
        }
    }
`;

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.margin.S};
    justify-content: space-around;

    @media ${(props) => props.theme.media.phone} {
        margin-top: ${({ theme }) => theme.margin.XXS};
    }
`;

export const NextItemsButton = styled.button`
    ${typography({ size: 16, weight: 'lighter', family: 'Roboto', color: styles.WHITE })}

    background: linear-gradient(272.88deg, #27355a 4.52%, #27355a 93.19%);
    box-shadow: 0px 4px 20px rgba(104, 109, 224, 0.5);
    border-radius: 50px;
    width: 250px;
    height: 50px;

    display: block;
    margin: ${({ theme }) => theme.margin.XS} auto;
    outline: none;
    border: none;
    cursor: pointer;
`;

export const NoRecipesLabel = styled.h1`
    ${typography({ align: 'center', family: 'Inter', size: 48, weight: 'normal', color: styles.HEADER_BLUE })}

    @media ${(props) => props.theme.media.phone} {
        ${typography({ size: 24 })}
    }
`;
