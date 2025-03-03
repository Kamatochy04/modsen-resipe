import styled from 'styled-components';

import { flexContainer } from '@/styles/mixins/centerItem';

export const Menu = styled.div`
    ${flexContainer({ gap: 50, flexDirection: 'column', display: 'none' })}
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;

    border: none;

    background-color: ${({ theme }) => theme.colors.main_color};
    transition:
        right 0.3s,
        box-sadow 0.1s;

    @media ${(props) => props.theme.media.tablet} {
        display: flex;
        box-shadow: -5px 0px 10px rgb(178, 178, 178);
    }
`;
