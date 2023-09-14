"use client";

import styled from "styled-components";

export const Root = styled.header`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.background};
    grid-area: 2 / 1 / 3 / 2;

    &[data-opened="closed"] {
        transition: 0.5s ease-in;
        transform: translateX(-250px);
    }
`;
