"use client";

import styled from "styled-components";

export const Root = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 20px;
    background: ${({ theme }) => theme.colors.slate2};
    border-bottom: 1px solid ${({ theme }) => theme.colors.slate4};
    grid-area: 1 / 2 / 2 / 3;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BrandContainer = styled.div``;

export const ToolsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const SignUpContainer = styled.div``;
