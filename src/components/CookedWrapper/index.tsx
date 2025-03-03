import styled from 'styled-components';

import { flexContainer } from '@/styles/mixins/centerItem';
import { typography } from '@/styles/mixins/typography';

export const Title = styled.h3`
    ${flexContainer({ gap: 17 })}
    position: relative;
    min-height: 44px;

    &::before {
        content: '';
        width: 5px;
        background-color: rgb(239, 200, 26);
        height: 100%;
        position: absolute;
        left: -17px;
    }
`;

export const FlexWrapper = styled.div`
    ${flexContainer({ flexDirection: 'column', gap: 42, alignContent: 'stretch' })}
`;

export const Typography = styled.p`
    ${typography({ weight: 400, size: 40, color: '#000' })}
`;
