import styled from "styled-components"

export const Button = styled.button`
    background-color: #000000;
    width: 60px;
    height: 60px;
    padding: 10px;
    color: #fff;
    font-weight: 600;
    font-size: 30px;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px; 
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 0px 8px 0px #3e3e407d;
    cursor: pointer;

    @media (max-width: 1180px) {
        bottom: 10px;
        position: fixed;
        top: auto;
        z-index: 10000;
    }
`;
