import styled from 'styled-components';

import Loader from '@/components/Loader/Loader';
import { flexContainer } from '@/styles/mixins/centerItem';

export const ImageWrapper = styled.div`
    ${flexContainer({})}
    overflow: hidden;
`;

export const LoadingSpinner = styled(Loader)<{ $isLoaded: boolean }>`
    display: ${(props) => (props.$isLoaded ? 'none' : 'block')};
`;

export const StyledImage = styled.img<{ $isLoaded: boolean }>`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.$isLoaded ? 'block' : 'none')};
`;
