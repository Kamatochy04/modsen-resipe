import styled from 'styled-components';

import ImageLoader from '@/components/ImageLoader/ImageLoader';
import styles from '@/constants/styles';
import { flexContainer } from '@/styles/mixins/centerItem';
import { typography } from '@/styles/mixins/typography';

export const ItemFooter = styled.div`
    ${flexContainer({ gap: 15, justifyContent: 'flex-end' })}
    position: absolute;
    padding: 15px;
    bottom: 0;
    right: 15px;
    width: 100%;
`;

export const ItemImage = styled(ImageLoader)`
    width: 100%;
    height: 318px;
`;

export const ItemLabel = styled.h3`
/ ${typography({ size: 22, align: 'center', weight: 'bold' })}
    color: ${({ theme }) => theme.colors.main_color};
    padding: 20px 10px 50px;
`;

export const ListItem = styled.div`
    width: 292px;
    background-color: ${styles.GRAY};
    border-radius: 28px;
    overflow: hidden;
    margin-bottom: 30px;
    cursor: pointer;
    position: relative;

    @media (max-width: 450px) {
        width: 95%;
    }
`;
