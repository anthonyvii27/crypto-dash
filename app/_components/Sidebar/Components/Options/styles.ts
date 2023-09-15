import styled, { css, keyframes } from "styled-components";

const Shake = keyframes`
    0% { margin-left: 0; }
    33% { transform: rotate(-12deg) }
    66% { transform: rotate(12deg) }
    100% { margin-left: 0; }
`;

export const Root = styled.ul`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 15px;
`;

export const Option = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: 40px;
        border-radius: 10px;
        padding: 0 15px;
        position: relative;

        color: ${theme.colors.slate12};
        font-size: 0.9rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 20px;

        cursor: pointer;
        transition: 0.3s ease-out;

        &:hover {
            background: ${theme.colors.slate3};
            color: ${theme.colors.slate12};
            transition: 0.1s ease-in;

            > svg {
                animation: ${Shake} 0.4s ease-in-out;
            }
        }

        &:focus {
            border: 1px solid ${theme.colors.slate4};
            background: ${theme.colors.slate3};
            color: ${theme.colors.slate12};
        }

        &[data-status="selected"] {
            background: ${theme.colors.slate3};
            color: ${theme.colors.slate12};
        }
    `};
`;

export const Separator = styled.span`
    display: block;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.slate3};
    margin: 10px 0;
`;

export const Credits = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const CreditText = styled.span`
    display: block;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.slate7};

    > a {
        all: unset;
        cursor: pointer;
        text-decoration: underline;

        &:hover {
            color: ${({ theme }) => theme.colors.slate10};
        }
    }
`;
