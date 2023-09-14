"use client";

import styled from "styled-components";

export const Root = styled.header`
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.colors.slate2};
    grid-area: 1 / 1 / 2 / 3;

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
