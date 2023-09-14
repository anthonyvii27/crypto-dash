"use client";

import styled from "styled-components";

export const Root = styled.main`
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 270px 1fr;
    grid-template-rows: 70px 1fr;
    grid-column-gap: 0;
    grid-row-gap: 0;

    &[data-sidebar-opened="closed"] {
        transition: 0.5s ease-in;
        grid-template-columns: 0 1fr;
    }
`;
