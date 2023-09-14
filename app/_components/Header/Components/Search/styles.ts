import styled, { css } from "styled-components";

export const Root = styled.div`
    ${({ theme }) => css`
        width: 40vw;
        height: 40px;
        display: flex;
        align-items: center;
        gap: 10px;
        background: ${theme.colors.white};
        border: 1px solid ${theme.colors.slate4};
        border-radius: 999px;
        padding: 0 13px;

        > input {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            color: ${theme.colors.slate10};
            font-size: 0.9rem;

            &::placeholder {
                color: ${theme.colors.slate8};
                font-size: 0.9rem;
            }
        }

        &:focus-within {
            border: 1px solid ${theme.colors.slate8};
        }
    `}
`;
