import styled from 'styled-components';

export const FooterBlock = styled.footer`
    background-color: ${({ theme }) => theme.colors.main_color};
    width: 100%;
    height: 160px;
    margin-top: ${({ theme }) => theme.padding.auto};

    @media ${(props) => props.theme.media.tablet} {
        height: 100px;
    }
`;
