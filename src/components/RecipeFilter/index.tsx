import styled from 'styled-components';

import styles from '@/constants/styles';
import { typography } from '@/styles/mixins/typography';

export const FormTitle = styled.h1`
    ${typography({ color: styles.HEADER_BLUE, family: 'Inter', size: 76, weight: 'lighter', align: 'center' })}
    font-weight: lighter;
    margin: 0;
    margin-top: 150px;

    @media ${(props) => props.theme.media.tablet} {
        margin-top: 75px;
        ${typography({ size: 48 })}
    }

    @media ${(props) => props.theme.media.phone} {
        display: none;
    }
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    width: 1280px;
    margin: 0 auto;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }
`;

export const SearchField = styled.input`
    ${typography({ size: 24, family: 'Inter', color: styles.GOLDEN })}
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${styles.GOLDEN};
    border-radius: 48px;
    padding: 12px 48px 12px 16px;
    margin-top: 65px;
    outline: none;

    &::placeholder {
        color: rgba(0, 0, 0, 0.22);
    }

    @media ${(props) => props.theme.media.tablet} {
        ${typography({ size: 14 })}
    }
`;

export const SearchButton = styled.button`
    outline: none;
    background: transparent;
    border: none;

    position: absolute;
    top: 12px;
    right: 16px;

    cursor: pointer;

    @media ${(props) => props.theme.media.tablet} {
        top: 7px;
    }
`;

export const FilterOptions = styled.div`
    width: 1280px;
    margin: 35px auto 0;
    display: flex;
    justify-content: space-around;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }

    @media ${(props) => props.theme.media.tablet} {
        flex-direction: column;
    }
`;

export const ErrorMessage = styled.h3`
    ${typography({ size: 24, family: 'Inter', color: styles.ERROR_RED })}
    margin-top: 20px;
    margin-left: 10px;

    @media ${(props) => props.theme.media.tablet} {
        ${typography({ size: 18 })}
    }
`;
