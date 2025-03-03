import { styled } from 'styled-components';

import styles from '@/constants/styles';
import { flexContainer } from '@/styles/mixins/centerItem';
import { typography } from '@/styles/mixins/typography';

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: ${({ theme }) => theme.margin.S};

    @media ${(props) => props.theme.media.phone} {
        margin-top: ${({ theme }) => theme.margin.XXS};
    }
`;
export const Wrapper = styled.div`
    margin-top: 80px;
`;

export const Title = styled.h3`
    position: relative;
    color: #000;
    font-size: 40px;
    font-weight: lighter;
    padding: 0 ${({ theme }) => theme.padding.XXS};
    margin: ${({ theme }) => theme.margin.none};

    &:before {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        background-color: ${styles.GOLDEN};
        display: inline-block;
        margin: 0 -${({ theme }) => theme.margin.XSM};
    }

    @media ${(props) => props.theme.media.phone} {
        font-size: 18px;
        line-height: 1;
        padding: 0 20px;

        &:before {
            margin: 0 -10px;
        }
    }
`;

export const Container = styled.div``;

export const FlexWrapper = styled.div`
    ${flexContainer({
        gap: 42,
        flexDirection: 'column',
    })}
    align-content: stretch;
`;

export const Typography = styled.p`
    ${typography({ weight: 400, size: 40, color: '#000' })}
`;
