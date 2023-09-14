import styled, { css } from "styled-components";

export const Root = styled.div`
    ${({ theme }) => css`
        width: max-content;
        height: 40px;
        border-radius: 999px;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background: ${theme.colors.slate12};
        color: ${theme.colors.slate4};

        cursor: pointer;
        transition: 0.2s ease-out;

        font-size: 0.9rem;
        font-weight: 400;

        &:focus {
            background: ${theme.colors.slate11};
            color: ${theme.colors.slate1};
        }

        &:hover {
            background: ${theme.colors.slate11};
            color: ${theme.colors.slate1};
            transition: 0.1s ease-in;
        }
    `}
`;
