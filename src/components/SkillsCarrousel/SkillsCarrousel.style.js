import styled from 'styled-components';

export const DivListAreaS = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const DivListS = styled.div`
    transition: all ease .3s;
    width: ${props=>props.width}px;
`;

export const DivButtonLeft = styled.div`
    position: absolute;
    width: 40px;
    height: 500px;
    /* background-color: rgba(0, 0, 0, 0.6); */
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;
    border-radius: 10px;

    left: 0;
`;

export const DivButtonRight = styled.div`
    position: absolute;
    width: 40px;
    height: 500px;
    /* background-color: rgba(0, 0, 0, 0.6); */
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    transition: all ease 0.4s;
    border-radius: 10px;

    right: 0;
`;

