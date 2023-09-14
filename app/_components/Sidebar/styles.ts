"use client";

import styled from "styled-components";

export const Root = styled.header`
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.slate1};
    border-right: 1px solid ${({ theme }) => theme.colors.slate4};
    grid-area: 1 / 1 / 3 / 2;
    position: relative;

    &[data-opened="closed"] {
        transition: 0.5s ease-in;
        transform: translateX(-250px);
    }
`;

export const Brand = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 30px;

    font-size: 1.3rem;
    font-weight: 800;
    letter-spacing: -0.01rem;
    color: ${({ theme }) => theme.colors.slate12};
`;
