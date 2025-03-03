import styled from 'styled-components';

export const SwitchContainer = styled.div`
    display: inline-block;
    width: 102px;
    height: 49px;
    position: relative;
`;

export const SwitchInput = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`;

export const Slider = styled.span<{ checked: boolean }>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => (props.checked ? '#000' : '#fff')};
    transition: 0.4s;
    border-radius: 24px;

    &:before {
        position: absolute;
        content: '';
        height: 25px;
        width: 25px;
        left: 14px;
        bottom: 24%;
        background-color: ${(props) => (props.checked ? '#27355A' : '#F17900')};
        transition: 0.4s;
        border-radius: 50%;
        transform: ${(props) => (props.checked ? 'translateX(50px)' : 'translateX(0)')};
    }
`;
