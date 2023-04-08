import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    cursor: pointer;
    text-decoration: none;
    background-color: #5048ff;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s cubic-bezier(0, 0, 0.25, 1);
    transition-property: background-color, transform, box-shadow;
    box-shadow: 0 5px 10px rgb(10 0 143 / 40%);
    :hover {
        background-color: #3d33ff;
        transform: scale(0.98);
        box-shadow: 0 2px 9px rgb(10 0 143 / 50%);
    }
`;
