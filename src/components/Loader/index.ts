import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const prixClipFix = keyframes`
    0% { clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0); }
    50% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0); }
    75%, 100% { clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%); }
`;

export const Spinner = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: ${rotate} 1s linear infinite;

    &::before,
    &::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #fff;
        animation: ${prixClipFix} 2s linear infinite;
    }

    &::after {
        transform: rotate3d(90, 90, 0, 180deg);
        border-color: rgb(255, 61, 0);
    }
`;
