import styled, { css } from "styled-components";

export const Toggle = styled.button`
    ${({ theme }) => css`
        width: 40px;
        height: 40px;
        border-radius: 999px;
        background: transparent;
        border: 1px solid ${theme.colors.slate4};

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
        transition: 0.2s ease-out;

        &:hover {
            transition: 0.1s ease-in;
            border: 1px solid ${theme.colors.slate8};
        }

        &:focus {
            border: 1px solid ${theme.colors.slate8};
        }
    `}
`;
